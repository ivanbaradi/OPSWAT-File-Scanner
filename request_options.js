/*** LIST OF HTTP OPTIONS FOR EACH REQUEST ***/



/**
 * Gets HTTP request options for hash lookup
 * Source: https://docs.opswat.com/mdcloud/metadefender-cloud-api-v4/ref#hash-lookup
 * 
 * @param api_key: API Key given by OPSWAT
 * @param hash_value: Hash value generated by a given text from a file
 * @returns 
 */
function getHashLookUpOptions(api_key, hash_value){
    return {
        "method": "GET",
        "url": `https://api.metadefender.com/v4/hash/${hash_value}`,
        "headers": {
        "apikey": api_key,
        },
        "body": "{}",
        "json": true
    }
}

/**
 * Gets HTTP request options for uploading a file
 * Source: https://docs.opswat.com/mdcloud/metadefender-cloud-api-v4/ref#file-upload
 * 
 * @param api_key: API Key given by OPSWAT
 * @param filepath: path of a file
 * @returns 
 */
function getAnalyzeFileOptions(api_key, filepath){
    return {
        "method": "POST",
        "url": "https://api.metadefender.com/v4/file",
        "headers": {
            "apikey": api_key,
            "Content-Type": 'application/octet-stream',
        },
        // "body": `"@/path/to/data.file"`,
        "body": `@/path/to/${filepath}`,
        "json": true
    }
}

/**
 * Gets HTTP request options for fetching analysis results
 * Source: https://docs.opswat.com/mdcloud/metadefender-cloud-api-v4/ref#file-lookupbydataid
 * 
 * @param api_key: API Key given by OPSWAT
 * @param x_file_metadata
 * @param dataId: data Id retrieved after uploading a new file
 * @returns 
 */
function getFetchAnalysisResultsOptions(api_key, dataId){
    return {
        "method": "GET",
        "url": `https://api.metadefender.com/v4/file/${dataId}`,
        "headers": {
         "apikey": api_key
        },
        "body": "{}",
        "json": true
    }
}

module.exports = {
    getHashLookUpOptions, 
    getAnalyzeFileOptions, 
    getFetchAnalysisResultsOptions
}