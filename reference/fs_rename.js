console.log("fs_renamejs");
import fs from 'node:fs';
import path from "node:path";
console.log("fs_renameFile: myurl, mypath, mydir");
import { fileURLToPath } from "node:url";
const myurl = import.meta.url;
const mypath = fileURLToPath(myurl);
const mydir = path.dirname(mypath);
console.log(myurl);
console.log(mypath);
console.log(mydir);
const pathtext = path.join(mydir, "/test", "hello.txt");
console.log(`pathtext:${pathtext}`);
const pathnew = path.join(mydir,"./test","helloworld.txt");
console.log(`pathnew: ${pathnew}`);
fs.rename(pathtext, pathnew, (err) =>{
    if(err) throw err;
    console.log("rename completed");
});

