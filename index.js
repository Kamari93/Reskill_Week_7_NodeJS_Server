// Import your http
const http = require("http");

// Create a server with HTTP
const server = http.createServer((request, response) => {
    console.log("The Server Has Been Created...Good Job")
});

// Initialize the port
const PORT = 4000;

// Listen to the server
server.listen(PORT, () => {
    console.log(`This server is running on Port ${PORT}`);
})

// Run the server by running this in termninal: “node index.js” 