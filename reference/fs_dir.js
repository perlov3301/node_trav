import fs from 'node:fs';
import path from "node:path";
// import { fileURLToPath } from "node:url";
console.log("fs_demojs; myurl, mypath, mydir:");
   import { fileURLToPath } from "node:url";
   const myurl = import.meta.url;
   const mypath = fileURLToPath(myurl);
   const mydir = path.dirname(mypath);
   console.log(myurl);
   console.log(mypath);
   console.log(mydir);
// create folder
fs.mkdir(path.join(mydir, "/test"), {}, err => {
    if(err) throw err;
    console.log(`folder created ...`);
});
// create file and write to file
// const content = "Hello World";
// const pathtext = path.join(mydir, "/test", "text.txt", {}, err=> {
//     if (err) { console.error(`pathtext was not created: ${err}`); }
//     else { console.log("pathtext for text.txt was created"); }
// });
// fs.writeFile(pathtext, content, err => {
//     if (err) { throw err; }
//     else { console.log("file was created"); }
// });
