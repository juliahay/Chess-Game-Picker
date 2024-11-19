var utils = {
    /**
    * @description convert an object to a meaningful output that users can read 
    * @param {Object} o - array of prompts to ask the user
    * @returns {String} easy to understand string output 
    */
    objToString: (o) => {
        let final = ''
        for (const [key, value] of Object.entries(o)) {
            final += `${key}: ${value}\n`
        }
        return final
    },
};