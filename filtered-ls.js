var fs =require("fs");
var path =require("path");

var folder =process.argv[2];
var extension= '.'+process.argv[3];

fs.readdir(folder,function(err,files){
    if(err) return console.error(err)
    files.forEach(function(file){
        if(path.extname(file)===extension){
            console.log(file);
        }
    })
});
