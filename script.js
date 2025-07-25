// --- Simulated Data ---
const simulatedTrendingData = [
    {
        keyword: "new zealand vs zimbabwe",
        searchVolume: "500K+",
        percentageChange: "↑ 1,000%",
        started: "9 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "nz vs zim", link: "#" },
            { text: "new zealand national cricket team vs zimb...", link: "#" }
        ],
        moreBreakdowns: 6
    },
    {
        keyword: "hulk hogan",
        searchVolume: "100K+",
        percentageChange: "↑ 1,000%",
        started: "4 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "hulk hogan news", link: "#" },
            { text: "hulk hogan death", link: "#" }
        ],
        moreBreakdowns: 15
    },
    {
        keyword: "iex share price",
        searchVolume: "100K+",
        percentageChange: "↑ 1,000%",
        started: "16 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "iex", link: "#" },
            { text: "iex shares", link: "#" }
        ],
        moreBreakdowns: 9
    },
    {
        keyword: "thailand",
        searchVolume: "100K+",
        percentageChange: "↑ 1,000%",
        started: "14 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "thailand cambodia war", link: "#" },
            { text: "cambodia", link: "#" },
            { text: "thailand cambodia", link: "#" }
        ],
        moreBreakdowns: 10
    },
    {
        keyword: "football transfer news",
        searchVolume: "200K+",
        percentageChange: "↑ 800%",
        started: "2 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "premier league transfers", link: "#" },
            { text: "serie a rumors", link: "#" }
        ],
        moreBreakdowns: 12
    },
    {
        keyword: "ai ethics debate",
        searchVolume: "150K+",
        percentageChange: "↑ 750%",
        started: "5 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "responsible ai", link: "#" },
            { text: "ai regulation", link: "#" }
        ],
        moreBreakdowns: 8
    },
    {
        keyword: "electric vehicle battery tech",
        searchVolume: "180K+",
        percentageChange: "↑ 950%",
        started: "7 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "solid-state batteries", link: "#" },
            { text: "ev charging infrastructure", link: "#" }
        ],
        moreBreakdowns: 10
    },
    {
        keyword: "climate tech investments",
        searchVolume: "120K+",
        percentageChange: "↑ 600%",
        started: "10 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "green energy startups", link: "#" },
            { text: "carbon capture solutions", link: "#" }
        ],
        moreBreakdowns: 5
    },
    {
        keyword: "space tourism latest",
        searchVolume: "90K+",
        percentageChange: "↑ 500%",
        started: "1 hour ago",
        status: "Active",
        trendBreakdown: [
            { text: "commercial spaceflight", link: "#" },
            { text: "orbital hotels", link: "#" }
        ],
        moreBreakdowns: 3
    },
    {
        keyword: "metaverse gaming trends",
        searchVolume: "110K+",
        percentageChange: "↑ 700%",
        started: "6 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "nft games", link: "#" },
            { text: "virtual reality experiences", link: "#" }
        ],
        moreBreakdowns: 9
    },
    {
        keyword: "quantum computing breakthrough",
        searchVolume: "80K+",
        percentageChange: "↑ 450%",
        started: "18 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "quantum machine learning", link: "#" },
            { text: "superposition explained", link: "#" }
        ],
        moreBreakdowns: 7
    },
    {
        keyword: "cybersecurity new threats",
        searchVolume: "130K+",
        percentageChange: "↑ 850%",
        started: "3 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "ransomware attacks", link: "#" },
            { text: "data privacy laws", link: "#" }
        ],
        moreBreakdowns: 11
    },
    {
        keyword: "remote work future",
        searchVolume: "95K+",
        percentageChange: "↑ 550%",
        started: "11 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "hybrid work models", link: "#" },
            { text: "digital nomad visas", link: "#" }
        ],
        moreBreakdowns: 6
    },
    {
        keyword: "sustainable fashion brands",
        searchVolume: "70K+",
        percentageChange: "↑ 400%",
        started: "1 day ago",
        status: "Active",
        trendBreakdown: [
            { text: "eco-friendly clothing", link: "#" },
            { text: "recycled materials fashion", link: "#" }
        ],
        moreBreakdowns: 4
    },
    {
        keyword: "health tech innovations",
        searchVolume: "160K+",
        percentageChange: "↑ 900%",
        started: "8 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "telemedicine growth", link: "#" },
            { text: "wearable health devices", link: "#" }
        ],
        moreBreakdowns: 13
    },
    {
        keyword: "esports world championship",
        searchVolume: "250K+",
        percentageChange: "↑ 1,200%",
        started: "1 hour ago",
        status: "Active",
        trendBreakdown: [
            { text: "league of legends finals", link: "#" },
            { text: "dota 2 international", link: "#" }
        ],
        moreBreakdowns: 18
    },
    {
        keyword: "global food security",
        searchVolume: "105K+",
        percentageChange: "↑ 650%",
        started: "14 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "agricultural innovations", link: "#" },
            { text: "food supply chain issues", link: "#" }
        ],
        moreBreakdowns: 7
    },
    {
        keyword: "new streaming service",
        searchVolume: "140K+",
        percentageChange: "↑ 780%",
        started: "4 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "streaming wars", link: "#" },
            { text: "exclusive series", link: "#" }
        ],
        moreBreakdowns: 9
    },
    {
        keyword: "sustainable tourism",
        searchVolume: "60K+",
        percentageChange: "↑ 350%",
        started: "2 days ago",
        status: "Active",
        trendBreakdown: [
            { text: "eco-tourism destinations", link: "#" },
            { text: "responsible travel", link: "#" }
        ],
        moreBreakdowns: 3
    },
    {
        keyword: "future of education",
        searchVolume: "85K+",
        percentageChange: "↑ 480%",
        started: "9 hours ago",
        status: "Active",
        trendBreakdown: [
            { text: "online learning platforms", link: "#" },
            { text: "personalized education", link: "#" }
        ],
        moreBreakdowns: 5
    }
];

let currentDisplayedTrends = []; // Stores the currently filtered/displayed trends
let updateInterval; // To hold the interval ID for real-time updates
let chartInstance = null; // To hold the Chart.js instance

// --- DOM Elements ---
const searchInput = document.getElementById('searchInput');
const trendsTableContainer = document.getElementById('trendsTableContainer');
const trendsTableBody = document.getElementById('trendsTableBody');
const loadingIndicator = document.getElementById('loadingIndicator');
const lastUpdatedSpan = document.getElementById('lastUpdated');
const selectAllCheckbox = document.getElementById('selectAllCheckbox');
const historicalGraphContainer = document.getElementById('historicalGraphContainer');
const graphTitle = document.getElementById('graphTitle');
const trendChartCanvas = document.getElementById('trendChart');
const backToHomeButton = document.getElementById('backToHomeButton');

// --- Functions ---

/**
 * Simulates fetching trending data from a "backend".
 * In a real application, this would be a fetch() call to your Node.js backend.
 * For this simulation, it shuffles and returns a subset of the predefined data.
 * @returns {Promise<Array<Object>>} A promise that resolves with an array of trending data objects.
 */
function fetchTrendingData() {
    loadingIndicator.classList.remove('hidden'); // Show loading spinner
    return new Promise(resolve => {
        setTimeout(() => {
            // Simulate network delay and slight data change
            const shuffledData = [...simulatedTrendingData].sort(() => 0.5 - Math.random());
            // Return the top 20 (or fewer if data is less)
            const dataSubset = shuffledData.slice(0, Math.min(shuffledData.length, 20));
            loadingIndicator.classList.add('hidden'); // Hide loading spinner
            resolve(dataSubset);
        }, 800); // Simulate 0.8 seconds loading time
    });
}

/**
 * Renders the table rows based on the provided trending data.
 * @param {Array<Object>} data - The array of trending data objects to display.
 */
function renderTrendsTable(data) {
    trendsTableBody.innerHTML = ''; // Clear existing rows
    if (data.length === 0) {
        trendsTableBody.innerHTML = '<tr><td colspan="5" class="text-center text-gray-500 py-8">No trending keywords found.</td></tr>';
        return;
    }

    data.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200';

        // Checkbox column
        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'individual-checkbox';
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // Keyword column - Now clickable to graph
        const keywordCell = document.createElement('td');
        keywordCell.className = 'text-gray-800 font-medium clickable-keyword'; // Added clickable-keyword class back
        keywordCell.textContent = item.keyword;
        // Add click listener to the keyword cell
        keywordCell.addEventListener('click', () => {
            searchInput.value = item.keyword; // Set search input to the clicked keyword
            showWordHistoryGraph(item.keyword);
            trendsTableContainer.style.display = 'none';
            historicalGraphContainer.style.display = 'block';
        });
        row.appendChild(keywordCell);

        // Search volume column
        const volumeCell = document.createElement('td');
        volumeCell.className = 'text-gray-700 text-sm';
        volumeCell.innerHTML = `
            <div class="flex items-center">
                <span>${item.searchVolume}</span>
                <span class="text-green-600 ml-2 text-xs font-semibold">${item.percentageChange}</span>
            </div>
        `;
        row.appendChild(volumeCell);

        // Started column
        const startedCell = document.createElement('td');
        startedCell.className = 'text-gray-600 text-sm';
        startedCell.innerHTML = `
            <span>${item.started}</span>
            <div class="text-xs text-gray-500">${item.status}</div>
        `;
        row.appendChild(startedCell);

        // Trend breakdown column
        const breakdownCell = document.createElement('td');
        breakdownCell.className = 'text-sm';
        item.trendBreakdown.forEach(breakdown => {
            const link = document.createElement('a');
            link.href = breakdown.link;
            link.className = 'trend-breakdown-link';
            link.textContent = breakdown.text;
            breakdownCell.appendChild(link);
        });
        if (item.moreBreakdowns > 0) {
            const moreSpan = document.createElement('span');
            moreSpan.className = 'text-blue-600 text-xs cursor-pointer hover:underline';
            moreSpan.textContent = `+ ${item.moreBreakdowns} more`;
            breakdownCell.appendChild(moreSpan);
        }
        row.appendChild(breakdownCell);

        trendsTableBody.appendChild(row);
    });
    updateSelectAllCheckboxState(); // Update select all checkbox after rendering
}

/**
 * Updates the "Last Updated" timestamp in the header.
 */
function updateLastUpdatedTimestamp() {
    const now = new Date();
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = now.toLocaleString('en-US', options);
    lastUpdatedSpan.textContent = `Trends (Updated ${formattedDate})`;
}

/**
 * Fetches and updates the trending keywords, then filters them.
 */
async function refreshTrendingData() {
    updateLastUpdatedTimestamp();
    currentDisplayedTrends = await fetchTrendingData();
    filterTrends(); // Call filterTrends to ensure correct display based on search input
}

/**
 * Filters the displayed trends based on the search input.
 * Shows the table if results are found, otherwise shows the graph.
 */
function filterTrends() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filtered = currentDisplayedTrends.filter(item =>
        item.keyword.toLowerCase().includes(searchTerm) ||
        item.trendBreakdown.some(bd => bd.text.toLowerCase().includes(searchTerm))
    );

    if (searchTerm === '' || filtered.length > 0) {
        // If search term is empty or results are found, show the table
        trendsTableContainer.style.display = 'block';
        historicalGraphContainer.style.display = 'none';
        renderTrendsTable(filtered);
    } else {
        // If no results found for the search term, hide table and show graph
        trendsTableContainer.style.display = 'none';
        historicalGraphContainer.style.display = 'block';
        showWordHistoryGraph(searchInput.value); // Use original case for display
    }
}

/**
 * Handles the "Select All" checkbox functionality.
 */
function handleSelectAllChange() {
    const isChecked = selectAllCheckbox.checked;
    document.querySelectorAll('.individual-checkbox').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}

/**
 * Updates the state of the "Select All" checkbox based on individual checkboxes.
 */
function updateSelectAllCheckboxState() {
    const individualCheckboxes = document.querySelectorAll('.individual-checkbox');
    if (individualCheckboxes.length === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
        return;
    }

    const checkedCount = Array.from(individualCheckboxes).filter(cb => cb.checked).length;
    if (checkedCount === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    } else if (checkedCount === individualCheckboxes.length) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
    } else {
        selectAllCheckbox.checked = false; // Set to false, then indeterminate
        selectAllCheckbox.indeterminate = true;
    }
}

/**
 * Generates simulated historical search volume data for a given word.
 * @param {string} word - The word to generate history for.
 * @returns {{labels: string[], data: number[]}} Historical data for Chart.js.
 */
function generateHistoricalData(word) {
    const labels = [];
    const data = [];
    const today = new Date();
    let baseVolume = (word.length * 1000) + (word.charCodeAt(0) * 100); // Simple heuristic for base volume

    for (let i = 29; i >= 0; i--) { // Last 30 days
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));

        // Simulate fluctuations: base + random noise + slight trend
        let volume = baseVolume + (Math.random() - 0.5) * baseVolume * 0.2; // +/- 20% noise
        if (i < 10) { // Simulate a recent slight increase or decrease
            volume += (Math.random() - 0.5) * baseVolume * 0.1;
        }
        data.push(Math.max(0, Math.round(volume / 1000) * 1000)); // Round to nearest 1000
    }
    return { labels, data };
}

/**
 * Displays a historical trend graph for a given word using Chart.js.
 * @param {string} word - The word to display the history for.
 */
function showWordHistoryGraph(word) {
    graphTitle.textContent = `Historical Trend for "${word}"`;
    const historicalData = generateHistoricalData(word);

    if (chartInstance) {
        chartInstance.destroy(); // Destroy existing chart instance if any
    }

    const ctx = trendChartCanvas.getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: historicalData.labels,
            datasets: [{
                label: 'Search Interest',
                data: historicalData.data,
                borderColor: 'rgb(26, 115, 232)', // Google blue
                backgroundColor: 'rgba(26, 115, 232, 0.1)',
                fill: true,
                tension: 0.3, // Smooth the line
                pointRadius: 3,
                pointBackgroundColor: 'rgb(26, 115, 232)',
                pointBorderColor: '#fff',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(26, 115, 232)',
                pointHoverBorderColor: 'rgb(220,220,220)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow canvas to resize freely
            plugins: {
                title: {
                    display: false, // Title is in H3 above canvas
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Interest: ${context.raw.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    },
                    grid: {
                        display: false // No vertical grid lines
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Search Interest (Simulated)'
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            return value.toLocaleString(); // Format Y-axis labels
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)' // Light horizontal grid lines
                    }
                }
            }
        }
    });
}

// --- Event Listeners ---

// Search input event listener
searchInput.addEventListener('input', filterTrends);

// Select All checkbox event listener
selectAllCheckbox.addEventListener('change', handleSelectAllChange);

// Event delegation for individual checkboxes
trendsTableBody.addEventListener('change', (event) => {
    if (event.target.classList.contains('individual-checkbox')) {
        updateSelectAllCheckboxState();
    }
});

// Back to Home/Trending button listener
backToHomeButton.addEventListener('click', () => {
    searchInput.value = ''; // Clear search input
    trendsTableContainer.style.display = 'block'; // Show table
    historicalGraphContainer.style.display = 'none'; // Hide graph
    renderTrendsTable(currentDisplayedTrends); // Re-render table with all current trends
});


// Initial load and real-time update setup
window.onload = () => {
    refreshTrendingData();
    // Ensure table is visible on load, graph is hidden
    trendsTableContainer.style.display = 'block';
    historicalGraphContainer.style.display = 'none';

    // Set up real-time updates (e.g., every 30 seconds)
    // In a real app with WebSockets, you'd listen for push events from the server.
    updateInterval = setInterval(refreshTrendingData, 30000); // Update every 30 seconds
};

// Clear interval when the window is closed or navigated away
window.onbeforeunload = () => {
    clearInterval(updateInterval);
};
