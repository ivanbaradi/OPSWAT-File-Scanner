/*** PROGRAM RUNS HERE ***/

//List of command line arguments 
const argv = process.argv
//API Key
const api_key = argv[2]
//File to use
const filename = argv[3]


//Set of pre-existing methods of SHA256
const Sha256 = require('./sha256')
//Imports 'request.js'
const request_handlers = require('./request_handlers')
//FileSystem Module
const fs = require('fs')


//Reads a file 
fs.readFile(filename, (err, data) => {
    
    if (err) throw err;

    //Gets hash value
    const hash_value = Sha256.hash(data.toString())
    // console.log(hash_value)

    //Sends a request to perform a hash lookup
    request_handlers.sendHashLookUpHTTPRequest(api_key, hash_value, `./${filename}`)
})