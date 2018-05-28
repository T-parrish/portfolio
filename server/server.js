// Server Config
const express = require('express');
const path = require('path');
require('./config/config.js')


// Port Mapping
const port = process.env.PORT || 3000;

// Helper libraries
const _ = require('lodash');
const bodyParser = require('body-parser');

// Database
const {mongoose} = require('./db/mongoose');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Route
app.use(express.static(publicPath));

// Main app route
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/api/blog', (req, res) => {
    try {
        res.json({ message: 'Hello, World!' });
    } catch (e) {
        res.send(e);
    }
});

app.post('/api/blog', (req, res) => {
    try {

    } catch (e) {
        
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});