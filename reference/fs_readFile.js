console.log("fs_readFilejs");
import fs from 'node:fs';
import path from "node:path";
console.log("fs_readFile;myurl,mypath,mydir");
import { fileURLToPath } from "node:url";
const myurl = import.meta.url;
const mypath = fileURLToPath(myurl);
const mydir = path.dirname(mypath);
const pathtext = path.join(mydir, "/test","hello.txt");
console.log(myurl);
console.log(mypath);
console.log(mydir);
console.log(`pathtext: ${pathtext}`);
fs.readFile(pathtext,'utf8', (err,data) =>{
    if(err){ 
        console.error(err);
        return;
     }
    console.log(`data: ${data}`);
});