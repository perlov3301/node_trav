console.log("path_demojs");
// const path = require('node:path');
import { dirname } from "node:path";
console.log(`process.argv[0]: ${dirname(process.argv[0])}` );
console.log(`process.argv[1]: ${dirname(process.argv[1])}`);
import { argv } from 'node:process';
console.log("argv array:");
argv.forEach((val,index)=> console.log(`${index}:${val}`));
import { fileURLToPath } from "node:url";
const myurl = import.meta.url;
const mypath = fileURLToPath(myurl);
console.log(`myurl:${myurl}`);
console.log(`mypath:${mypath}`) ;

import path from "node:path";
// filename directory  fileExtention pathObject PropertyOfPathObject
// concatenate path to ../test/hello.html: join();
console.log(`path.basename(mypath): ${path.basename(mypath)}`);
const mydir = path.dirname(mypath);
console.log(`path.dirname(mypath):  ${mydir}`);
console.log(`path.extname(mypath):  ${path.extname(mypath) }`); 
console.log( path.parse(mypath));
console.log(`path.parse(mypath).base: ${path.parse(mypath).base}`);
console.log(`path.join(mydir,'test','.html'): ${path.join(mydir, "test", "hello.html")}`);









