// start your server here
const server = require('./api/server');
require('dotenv').config()

const port = process.env.PORT || 6969
    return server.listen(port, ()=>{
    console.log(`server is listening on port:${port} lets get it!`)
    });