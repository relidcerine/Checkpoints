const fs = require("fs");
const path = require("path");

const filepath =path.join(process.cwd(),'content2.txt')
const buf =fs.readFileSync(filepath,{encording:"utf8",flag:"r"});
const str=buf.toString().split("\n");
console.log(str);
console.log(str.length);