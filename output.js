/** OUTPUT ***/



/**
 * Logs output of the file
 * @param filepath: name of the file
 * @param scan_results: results after a file is scanned
 */
 function output(filepath, scan_results){

    const {scan_details} = scan_results

    //Logs name of the file
    console.log(`filename: ${filepath.slice(2)} \n`)

    //Iterates through every engine from scan_details {key: name of the engine, value: engine's details}
    for(const [engine_name, engine_details] of Object.entries(scan_details)){

        //Logs the name of the engine
        console.log(`engine: ${engine_name}`)

        //Iterates through every detail from engine's details {key: name of the detail, value: detail}
        for(var [detail_name, engine_detail] of Object.entries(engine_details)){

            //This detail is not apart of this output
            if(detail_name == 'scan_time') continue

            switch(detail_name){
                case 'scan_result_i': //Renames 'scan_result_i' to 'scan_result'
                    detail_name = 'scan_result'
                    break
                case 'threat_found': //If no threat is detected, then add 'Clean'
                    if(engine_detail == ''){
                        engine_detail = 'Clean'
                    }
                    break
            }

            console.log(`${detail_name}: ${engine_detail}`)
        }
        console.log()
    }
}

module.exports = {output}
