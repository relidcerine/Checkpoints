const fs =require("fs");
const path = require("path");

const filepath =path.join(process.cwd(),'content2.txt')
fs.readFile(filepath,function(err,contents){
    const str=contents.toString().split("\n");
    console.log(str);
    console.log(str.length)
});
