const http = require('http');
const express = require('express');
const path = require("path")
const bodyParser = require('body-parser') 
const app = express();
const routing = require('./routing');
const middleware = require('./routing/middleware')

const PORT = 3000;

//app.use(express.static(path.join(__dirname, "../client"))) // serve static files under the client folder

app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
    extended: true
}));

app.use('/api', middleware, routing);

app.listen(PORT, () => {
    console.log(`HTTP Server is running on port: ${PORT}`);
});