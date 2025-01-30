const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Success!');
      } else {
        reject(new Error('Simulated error'));
      }
    }, 100);
  });

  asyncOperation
    .then(result => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch(error => {
      // Error handling is missing here.  The server just silently fails
      console.error('Error:', error); //This will log the error, but the client gets nothing.
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});