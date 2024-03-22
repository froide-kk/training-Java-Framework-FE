const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname, 'exercises', 'crossOrigin', 'index.html'));
});

app.get('/slack', (req, res) => {
    res.sendFile(path.join(__dirname, 'exercises', 'slackApi', 'index.html'));
});

app.get('/assignment', (req, res) => {
    res.sendFile(path.join(__dirname, 'assignment', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
