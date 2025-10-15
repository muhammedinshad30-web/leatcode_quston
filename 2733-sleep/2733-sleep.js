/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise (
        function (a,b){
            setTimeout((millis)=>{
                return a(millis)
    },millis)
        }   
    )
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */