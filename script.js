//search

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value;
    // Pass the search term to the results page as a URL parameter
    window.location.href = `results.html?search=${encodeURIComponent(searchTerm)}`;
});


//language button

// JavaScript to toggle the language dropdown
const languageButton = document.getElementById("language-button");
const languageDropdown = document.getElementById("language-dropdown");

languageButton.addEventListener("click", () => {
    languageDropdown.classList.toggle("hidden");
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", (event) => {
    if (!event.target.matches("#language-button")) {
        languageDropdown.classList.add("hidden");
    }
});




