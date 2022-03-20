const http = require('http');

const server = http.createServer(( req, res ) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    res.end(`
        <h1>Oh boy no page is here</h1>
        <a href="/">back to homepage</a>
    `);
})

server.listen(5005);