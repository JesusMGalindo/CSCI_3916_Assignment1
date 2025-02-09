// Pulling in express to create API server
const express = require('express');
const app = express();

app.use(express.json());  // Middleware to parse JSON request body

// Creating a route to handle GET requests to the root URL
app.post('/', (req, res) => {
    const acceptHeader = req.accept('accept');
    
    const responseBody = {
        acceptHeader: acceptHeader,
        ...req.body
    }

    res.json(responseBody);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server; // Exporting the server for testing purposes