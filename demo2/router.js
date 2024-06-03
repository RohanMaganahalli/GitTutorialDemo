
Original file line number 	Diff line number 	Diff line change
@@ -0,0 +1,66 @@
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Read existing messages from the file
        const existingMessages = fs.readFileSync('message.txt', 'utf8').split('\n').filter(msg => msg.trim() !== '');

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');

        // Display existing messages at the top of the form
        for (const message of existingMessages) {
            res.write(`<p>${message}</p>`);
        }

        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            // Append the new message to the file
            fs.appendFileSync('message.txt', message + '\n');

            // Redirect to the home page after submitting the form
            res.writeHead(302, { 'Location': '/' });
            return res.end();
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello From Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
    }
}

//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded Text'
// };


// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded Text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded Text';
