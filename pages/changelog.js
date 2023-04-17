document.addEventListener("DOMContentLoaded", function () {
    fetchChangelog();
  });
  
  function fetchChangelog() {
    const repoOwner = "wadder12";
    const repoName = "Wadder-Projects-Webpage-v2";
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
      changelogContainer.appendChild(releaseSection);
    });
  }
  