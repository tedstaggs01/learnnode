// ===========================================================================
// ======================= BACKEND DEVELOPMENT ===============================
// Modules 

const fs = require("fs"); // file system module => returns objects with many possibilites
const http = require('http'); 
const url = require('url'); // url for routing... 


// FILES 
//=========================================================================
// read a file and work with it. => SYNC ==================================
//const textIn = fs.readFileSync('notes.md', 'utf-8'); 
//console.log(textIn); 
// Write a file. => SYNC
//const textOut = `This is what we know about the avocado: ${textIn} Created on ${Date.now()}`;
/*fs.writeFileSync('outnotes.txt', textOut); 
console.log('File written'); 

// ASYNC WAAY =============================================================

fs.readFile('notes.md', 'utf-8', (err, data) => {
    console.log(data); 
    console.log(data);
})
console.log("Will read file"); // This will be logged first because the other part is being read in the background
// ===============================================================================
// SERVER */ 
const server = http.createServer( (req, res) => { // request / respond 
    console.log(req.url); // url gets logged

    const pathName = req.url; 
    if(pathName === '/overview') {
        res.end('This is the OVERVIEW');

        } else if (pathName === '/product') {
            res.end('this is product'); 
        } else {
        res.end('Hello from the server'); // end = method = simplest way to send back response
        }
    }); 



server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000')
});  // IP for localhost 
//=> app will continue running in terminal ==> due to event loop 
// inorder to accomodate new requests ... wait ... 
// control + C => exit terminal / quit server 



