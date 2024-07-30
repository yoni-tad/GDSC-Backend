const http = require("http");
const port = 3000;
const manager = require("./mwManager");

const server = http.createServer((req, res) => {
    manager();
    requestHandler(req, res);
});

function errorMW(err, req, res){
    console.log(err);
    console.log(err.url);
    console.log(err.statusCode);

}
 
function requestHandler(err, req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('Hello, world!');
    } else if (req.url === '/protected') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('This is a protected route');
    } else {
        
        // res.writeHead(200, { 'Content-Type': 'text/plain'});
        // res.end('Not found');
    }
    errorMW(err, req, res);
}

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});