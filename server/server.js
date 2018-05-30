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
const { mongoose } = require('./db/mongoose');
const { Blog } = require('./models/blog');
const { User } = require('./models/users');

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

app.get('/api/blog', async (req, res) => {
    try {
        let doc = await Blog.find()
        res.send({doc})
    } catch (e) {
        res.send(e);
    }
});

app.post('/api/blog', async (req, res) => {
    let blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
        author: req.body.author
    });
    try {
        let doc = await blog.save();
        res.send(doc);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.post('/api/users', async (req, res) => {
    try {
		var body = _.pick(req.body, ['email', 'password']);
		var user = new User(body);
		await user.save();
		var token = await user.generateAuthToken();
		res.header('x-auth', token).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

// POST route for user to login / generate new x-auth header token
app.post('/api/users/login', async (req, res) => {
	try {
		var body = _.pick(req.body, ['email', 'password']);
		var user = await User.findByCredentials(body.email, body.password);
		var token = await user.generateAuthToken();
		res.header('x-auth', token).send(user);
	} catch (e) {
		res.status(400).send();
	}
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});