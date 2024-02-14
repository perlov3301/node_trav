console.log("node_travjs");
import { EventEmitter } from 'node:events';
import fs from "node:fs";
import url from 'node:url';
import path from 'node:path';
import { fileURLToPath } from 'node:url'; 
import {v1, v4} from 'uuid';
const myUrl = import.meta.url;
const myPath = fileURLToPath(myUrl);
console.log(`myPath: ${myPath}`);
// const myV1 = v1();
// console.log(`timestamp ID: ${myV1}`);
const myV4 = v4();
console.log(`random ID: ${myV4}`);

class Logger extends EventEmitter {
    log(msg1) {
// init event named "myevent_msg" when log() is called
//'this' is for class
      this.emit("myevent_msg", { id: v4(), msg:msg1 });
    }
}

export default Logger;
