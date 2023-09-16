const searchResults = document.getElementById("search-results");

// Function to get the search term from the URL parameter
function getSearchTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("search");
}

// Function to display search results (replace with your own data)
function displayResults(searchTerm) {
    // Sample data for searching (replace with your own data)
    const data = [
        { title: "Contact", url: "contact.html" },
        { title: "Legal", url: "legalawareness.html" },
        { title: "Legal queries", url: "legalqueries.html" },
        { title: "Legal Awareness", url: "legalawareness.html" },
        { title: "know", url: "kyc.html" },
        { title: "Awareness", url: "legalawareness.html" },
        { title: "KYC", url: "kyc.html" },
        { title: "Laws", url: "laws.html" },
        { title: "Family", url: "laws.html" },
        { title: "Family law", url: "laws.html" },
        { title: "Criminal Law", url: "laws.html" },
        { title: "Criminal", url: "laws.html" },
        { title: "Queries", url: "legalqueries.html" },
        // Define your searchable content here with titles and URLs
    ];

    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (filteredData.length === 0) {
        searchResults.innerHTML = "No such word exists.";
        return;
    }

    const ul = document.createElement("ul");
    filteredData.forEach(result => {
        const li = document.createElement("li");
        // Create an anchor element with the result title and URL
        const link = document.createElement("a");
        link.textContent = result.title;
        link.href = result.url;
        link.target = "_blank"; // Open the link in a new tab/window
        li.appendChild(link);
        ul.appendChild(li);
    });

    searchResults.appendChild(ul);
}

// Get the search term from the URL and display results
const searchTerm = getSearchTerm();
if (searchTerm) {
    displayResults(searchTerm);
}
