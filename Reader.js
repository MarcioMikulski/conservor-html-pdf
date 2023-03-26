const fs = require("fs");
const util = require("util");

//criou a class Reader, depois no constructor fez o >>>>> 
//>>>> this.reader com a util.promisify e dentro colocou >>>>
//fs.readFile, transformando em promise
class Reader{
    constructor () {
        this.reader = util.promisify(fs.readFile);
    }
   async Read(filepath){
        try{
            return await this.reader(filepath, "utf-8")
        }catch{
            return undefined;
        }
       
        /* fs.readFile(filepath, "utf-8", (err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        }) */
    }
}

module.exports = Reader;