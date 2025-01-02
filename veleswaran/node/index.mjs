// server.js
import http from "http";
import fs from "fs";
import path from "path";
import qs from "querystring";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Serve the HTML form
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else if (req.method === "POST" && req.url === "/submit") {
    // Handle form submission
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = qs.parse(body);
      console.log(formData);
      const name = formData.name;
      const email = formData.email;

      // Do something with the data (e.g., save to a database)
      console.log(`Name: ${name}, Email: ${email}`);

      // Send a response
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Form submitted successfully!");
    });
  } else {
    // Handle other routes or methods
    res.writeHead(404);
    res.end("Not Found");
  }
});

const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
