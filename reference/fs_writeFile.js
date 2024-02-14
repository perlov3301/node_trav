import fs from 'node:fs';
import path from "node:path";
console.log("fs_filejs; myurl, mypath, mydir:");
import { fileURLToPath } from "node:url";
   const myurl = import.meta.url;
   const mypath = fileURLToPath(myurl);
   const mydir = path.dirname(mypath);
   console.log(myurl);
   console.log(mypath);
   console.log(mydir);


// create file and write to file
const content = "Hello World;";
const pathtext = path.join(mydir, "/test","hello.txt");
// fs.mkdir(pathtext,{},err=>{
//     if(err){ console.error(err); }
//     else { console.log("/test folder was created"); }
// });
fs.writeFile(pathtext, content,  err => {
    if (err) { throw err; }
    else { console.log("file was created and content was writen"); }
    // File append
    fs.appendFile(pathtext, " I love nodejs",  err => {
        if (err) { throw err; }
        else { console.log("file was created and content was writen"); }
    });
});

