function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("results");

  const recommendations = {
    france: "France: Visit Paris and the French Riviera!",
    japan: "Japan: Experience Tokyo, Kyoto and historic temples!",
    azerbaijan: "Azerbaijan: Discover Baku and Gabala!"
  };

  if (recommendations[input]) {
    results.textContent = recommendations[input];
  } else {
    results.textContent = "No recommendations found for: " + input;
  }
}
