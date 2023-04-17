document.addEventListener('DOMContentLoaded', function () {
    fetchServerStats();
  });
  
  function fetchServerStats() {
    const serverAddress = '208.52.147.254:25565'; // Replace with your Minecraft server address
    const apiURL = `https://api.mcsrvstat.us/2/${serverAddress}`;
  
    fetch(apiURL)
      .then(response => response.json())
      .then(data => updateServerStats(data))
      .catch(error => console.error('Error fetching server stats:', error));
  }
  
  function updateServerStats(data) {
    if (data.online) {
      document.getElementById('online-players').textContent = data.players.online;
      document.getElementById('max-players').textContent = data.players.max;
      document.getElementById('server-version').textContent = data.version;
    } else {
      document.getElementById('online-players').textContent = 'N/A';
      document.getElementById('max-players').textContent = 'N/A';
      document.getElementById('server-version').textContent = 'N/A';
    }
  }
  