const http = require('http');
const express = require('express');
const app = express();
const routing = require('./routing');
const middleware = require('./routing/middleware')

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server!');
});

app.use('/api', middleware, routing);

app.listen(PORT, () => {
    console.log(`HTTP Server is running on port: ${PORT}`);
});