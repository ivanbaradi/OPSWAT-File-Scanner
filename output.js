/** OUTPUT ***/



/**
 * Logs output of the file
 * @param filepath: name of the file
 * @param scan_results: results after a file is scanned
 */
 function output(filepath, scan_results){

    const {scan_details, scan_all_result_a} = scan_results

    //Logs name of the file
    console.log(`\nfilename: ${filepath.slice(2)}`)

    //Logs overall status of all engines
    if(scan_all_result_a == 'No Threat Detected'){
        console.log(`overall_status: Clean\n`)
    } else {
        console.log(`overall_status: ${scan_all_result_a}\n`)
    }

    //Iterates through every engine from scan_details {key: name of the engine, value: engine's details}
    for(const [engine_name, engine_details] of Object.entries(scan_details)){

        //Logs the name of the engine
        console.log(`engine: ${engine_name}`)

        //Iterates through every detail from engine's details {key: name of the detail, value: detail}
        for(var [detail_name, engine_detail] of Object.entries(engine_details)){

            //This detail is not apart of this output
            if(detail_name == 'scan_time') continue

            switch(detail_name){
                case 'scan_result_i': 
                    detail_name = 'scan_result' //Renames 'scan_result_i' to 'scan_result'
                    break
                case 'threat_found': 
                    if(engine_detail == ''){
                        engine_detail = 'Clean' //If no threat is detected, then add 'Clean'
                    }
            }

            //Logs the description of the detail
            console.log(`${detail_name}: ${engine_detail}`)
        }
        console.log()
    }

}

module.exports = {output}
