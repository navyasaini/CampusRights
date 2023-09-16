//search

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value;
    // Pass the search term to the results page as a URL parameter
    window.location.href = `results.html?search=${encodeURIComponent(searchTerm)}`;
});











