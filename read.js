const fs = require('fs');
fs.readFile("a.txt","UTF-8",(err,data)=>{
console.log(data);
console.log(err);
});
console.log("Done")