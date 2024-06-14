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
        { title: "Campus Rights", url: "index.html" },
        { title: "Financial Aid for College Students", url: "financialaid.html" },
        { title: "Privacy Rights", url: "privacyrights.html" },
        { title: "Sexual Harassment", url: "sexualharassment.html" },
        { title: "Academic Integrity", url: "academicintegrity.html" },
        { title: "Government schemes for financial assistance", url: "financialaid.html" },
        { title: "Department of Higher Education (DHE)", url: "financialaid.html" },
        { title: "scholarships and fellowships", url: "financialaid.html" },
        { title: "financial assistance", url: "financialaid.html" },
        { title: "Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Yojana", url: "financialaid.html" },
        { title: "National Education Policy (NEP) 2020", url: "financialaid.html" },
        { title: "Gross Enrolment Ratio in higher education", url: "financialaid.html" },
        { title: "Economically Weaker Sections (EWS)", url: "financialaid.html" },
        { title: "Family Educational Rights and Privacy Act (FERPA)", url: "privacyrights.html" },
        { title: "Health Insurance Portability and Accountability Act (HIPAA)", url: "privacyrights.html" },
        { title: "educational records", url: "privacyrights.html" },
        { title: "personal information protection", url: "privacyrights.html" },
        { title: "student data privacy", url: "privacyrights.html" },
        { title: "campus surveillance", url: "privacyrights.html" },
        { title: "security cameras on campus", url: "privacyrights.html" },
        { title: "digital monitoring tools", url: "privacyrights.html" },
        { title: "consent and disclosure policies", url: "privacyrights.html" },
        { title: "FERPA regulations", url: "privacyrights.html" },
        { title: "report privacy violations", url: "privacyrights.html" },
        { title: "digital privacy protection", url: "privacyrights.html" },
        { title: "online privacy", url: "privacyrights.html" },
        { title: "protect online activities", url: "privacyrights.html" },
        { title: "confidentiality of academic achievements", url: "privacyrights.html" },
        { title: "privacy of medical records", url: "privacyrights.html" },
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
