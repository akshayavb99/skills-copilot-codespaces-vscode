// Create a web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {}; // cache file content

// Create HTTP server
var server = http.createServer(function(request, response) {
	var filePath = false;

	if (request.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'public' + request.url;
	}

	var absPath = './' + filePath;
	serveStatic(response, cache, absPath);
});

server.listen(3000, function() {
	console.log("Server listening on port 3000.");
});

// Create socket.io server
var chatServer = require('./lib/chat_server');
chatServer.listen(server);

// 404 page
function send404(response) {
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('Error 404: resource not found.');
	response.end();
}

// Send file data
function sendFile(response, filePath, fileContents) {
	response.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}

// Serve static file
function serveStatic(response, cache, absPath) {
	// Check if file is cached in memory
	if (cache[absPath]) {
		sendFile(response, absPath, cache[absPath]); // Serve file from memory
	} else {
		// Check if file exists
		fs.exists(absPath, function(exists) {
			if (exists) {
				// Read file from disk
				fs.readFile(absPath, function(err, data) {
					if (err) {
						send404(response);
					} else {
						cache[absPath] = data; // Cache file in memory
						sendFile(response, absPath, data); // Serve file from disk
					}
				});
			} else {
				send404(response); // Send 404 response
			}
		});
	}
}
