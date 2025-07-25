// server.js
const express = require('express');
const path = require('path');
const cors = require('cors'); // Required for cross-origin requests if frontend is served from a different origin

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests (important for local development if frontend and backend are on different ports)
app.use(cors());

// Serve static files from the current directory (where index.html, style.css, script.js are located)
app.use(express.static(path.join(__dirname)));

// --- Simulated Data (Moved from script.js to backend) ---
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

/**
 * Generates simulated historical search volume data for a given word.
 * This function is now part of the backend.
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


// API endpoint for trending data
app.get('/api/trending', (req, res) => {
    // In a real application, you would fetch real trending data from an external API here.
    // Example: Using axios to fetch from Google Trends API, Twitter API, etc.
    // const axios = require('axios');
    // axios.get('https://api.example.com/trends?apiKey=YOUR_API_KEY')
    //   .then(response => res.json(response.data))
    //   .catch(error => res.status(500).json({ message: 'Error fetching trends', error }));

    // For now, we return simulated data
    const shuffledData = [...simulatedTrendingData].sort(() => 0.5 - Math.random());
    const dataSubset = shuffledData.slice(0, Math.min(shuffledData.length, 20)); // Return top 20
    res.json(dataSubset);
});

// API endpoint for historical data of a specific keyword
app.get('/api/history/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    // In a real application, you would fetch real historical data for the keyword here.
    // Example: axios.get(`https://api.example.com/history?keyword=${keyword}&apiKey=YOUR_API_KEY`)
    const historyData = generateHistoricalData(keyword); // Use the simulated function
    res.json(historyData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Open your browser and navigate to this address.');
});
