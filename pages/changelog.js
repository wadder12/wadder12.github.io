document.addEventListener("DOMContentLoaded", function () {
    fetchChangelog();
  });
  
  function fetchChangelog() {
    const repoOwner = "wadder12";
    const repoName = "Wadder-V5--DEV-";
    const apiURL = `https://api.github.com/repos/${repoOwner}/${repoName}/releases`;
  
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => displayChangelog(data))
      .catch((error) => console.error("Error fetching changelog:", error));
  }
  
  function displayChangelog(releases) {
    const changelogContainer = document.getElementById("changelog");
  
    releases.forEach((release) => {
      const releaseSection = document.createElement("section");
      releaseSection.classList.add("update");
  
      const releaseTitle = document.createElement("h3");
      releaseTitle.textContent = `${release.name} - ${new Date(
        release.published_at
      ).toLocaleDateString("en-US")}`;
      releaseSection.appendChild(releaseTitle);
  
      const releaseNotes = document.createElement("ul");
      release.body.split("\n").forEach((note) => {
        const listItem = document.createElement("li");
        listItem.textContent = note;
        releaseNotes.appendChild(listItem);
      });
      releaseSection.appendChild(releaseNotes);
  
      // Fetch the list of changed files
      fetch(release.tarball_url)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            const fileList = document.createElement("ul");
            const files = reader.result
              .split("\n")
              .filter((line) => line.startsWith("diff --git"));
  
            files.forEach((fileLine) => {
              const fileParts = fileLine.split(" ");
              const filePath = fileParts[2].slice(2);
              const listItem = document.createElement("li");
              listItem.textContent = `Changed: ${filePath}`;
              fileList.appendChild(listItem);
            });
  
            releaseSection.appendChild(fileList);
          };
          reader.readAsText(blob);
        })
        .catch((error) => console.error("Error fetching changed files:", error));
  
      changelogContainer.appendChild(releaseSection);
    });
  }
  