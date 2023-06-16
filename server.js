// This is a JavaScript file named "server.js"

// Import the required modules
const http = require("http");
const fs = require("fs");

// Create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  
  // Read the content of the file
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Log the content of the file to the console
    console.log("Content of welcome.txt:", data);
    
    // Send the response to the client
    res.end("<h1>Hello, Node!</h1>");
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});