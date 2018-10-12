const http = require('http');
const app = require('./api/signup');
// const app = require('./api/login');

const port = process.env.PORT || 3000;

app.set(port);

/* const server = http.createServer((req,res)=>{
    res.end("From nodejs web server");
}); */

const server = http.createServer(app);

server.listen(port);