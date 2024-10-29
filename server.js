const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});

app.use(express.json());

let lastPrediction = null;

app.get('/', (req, res) => {
    res.send("API is running. Use POST /predict to generate a prediction and GET /prediction to fetch the latest prediction.");
});

app.post('/predict', (req, res) => {
    console.log("Request Body:", req.body); 

    if (!req.body || !req.body.data) {
        return res.status(400).json({ error: "Invalid request format" });
    }

    const { data } = req.body;
    const predictions = trendBasedPrediction(data, 10);

    const startDate = new Date(data[data.length - 1].timestamp);
    const result = predictions.map((value, i) => ({
        timestamp: new Date(startDate.getTime() + (i + 1) * 7 * 24 * 60 * 60 * 1000).toISOString(),
        value: Math.round(value)
    }));

    lastPrediction = {
        timestamp: new Date().toISOString(),
        data: result
    };

    res.json(lastPrediction);
});

app.get('/prediction', (req, res) => {
    if (lastPrediction) {
        res.json(lastPrediction);
    } else {
        res.status(404).json({ error: "No prediction found." });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function trendBasedPrediction(data, forecastLength) {
    const predictions = [];
    const last5Weeks = data.slice(-5).map(entry => entry.value);

    for (let i = 0; i < forecastLength; i++) {
        const average = last5Weeks.reduce((a, b) => a + b, 0) / last5Weeks.length;
        const randomNoise = Math.random() * 0.1 * average; 
        const direction = Math.random() > 0.5 ? 1 : -1; 

        const prediction = average + direction * randomNoise;
        predictions.push(prediction);

        last5Weeks.shift();
        last5Weeks.push(prediction);
    }

    return predictions;
}
