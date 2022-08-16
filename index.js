/*** PROGRAM RUNS HERE ***/

//List of command line arguments 
const argv = process.argv

//Incorrect number of parameters used
if(argv.length != 4){
    console.log('Please input command line arguments in the following format:')
    console.log('node index.js {api_key} samplefile.txt')
    process.exit(1)
}

//API Key
const api_key = argv[2]
//File Path
const filepath = `./${argv[3]}`

//Set of pre-existing methods of SHA256
const Sha256 = require('./sha256')
//Imports 'request.js'
const request_handlers = require('./request_handlers')
//FileSystem Module
const fs = require('fs')

//Reads a file 
fs.readFile(filepath, (err, data) => {
    
    if (err) throw err;

    // console.log(data.toString())

    //Gets hash value
    const hash_value = Sha256.hash(data.toString())
    // console.log(hash_value)


    //Sends a request to perform a hash lookup
    request_handlers.sendHashLookUpHTTPRequest(api_key, hash_value, filepath)
})