// Create web server with express
const express = require('express');
const app = express();

// Create a route to handle incoming requests
// app.get('/', (req, res) => {
//     res.send('This is the home page');
// });

// app.get('/comments', (req, res) => {
//     res.send('This is the comments page');
// });

// app.get('/comments/new', (req, res) => {
//     res.send('This is the new comments page');
// });

// app.get('/comments/:id', (req, res) => {
//     res.send('This is the page for comment with id: ' + req.params.id);
// });

// app.get('/comments/:id/edit', (req, res) => {
//     res.send('This is the page for editing comment with id: ' + req.params.id);
// });

// app.post('/comments', (req, res) => {
//     res.send('You have submitted the comment to the database');
// });

// app.patch('/comments/:id', (req, res) => {
//     res.send('You have edited the comment with id: ' + req.params.id);
// });

// app.delete('/comments/:id', (req, res) => {
//     res.send('You have deleted the comment with id: ' + req.params.id);
// });

// app.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });

// Path: comments.js
// Create web server with express
const express = require('express');
const app = express();

// Create a route to handle incoming requests
app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

app.get('/comments/new', (req, res) => {
    res.send('This is the new comments page');
});

app.get('/comments/:id', (req, res) => {
    res.send('This is the page for comment with id: ' + req.params.id);
});

app.get('/comments/:id/edit', (req, res) => {
    res.send('This is the page for editing comment with id: ' + req.params.id);
});

app.post('/comments', (req, res) => {
    res.send('You have submitted the comment