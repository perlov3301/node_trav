console.log("log_trav_home");
import Logger from "./log_trav.js";
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Console } from 'node:console';

const output = fs.createWriteStream('./log/stdout.log');
const errOut = fs.createWriteStream('./log/stderr.log');
const logWriter = new Console({stdout:output, stderr: errOut});

const myurl = import.meta.url;
const mypath = fileURLToPath(myurl);
const mydir = path.dirname(mypath);
const pathtext = path.join(mydir, "/log", "trav_home.log");


const logger = new Logger();
// add Listener to event 'myevent_msg'
logger.on("myevent_msg", (data) => {
    logWriter.log(data);
    console.log('called Listener', data);
    const datatext = `id:${data.id}, msg:${data.msg}`;
    fs.writeFile(pathtext,datatext, err=>{
        if(err) {throw err;}
        else {console.log("file was created and data was writen");}
        // file append
        // fs.appendFile(pathtext, 'new data', err=>{});
    });
});
// to run EvenEmitter.emit("myevent_msg");
logger.log("Hello World_plus Console");