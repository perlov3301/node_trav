console.log("log_nodejs");
import fs from "node:fs";
import { Console } from 'node:console';

const output = fs.createWriteStream('./test/stdout.log');
const errOut = fs.createWriteStream('./test/stderr.log');
const logger = new Console({ stdout: output, stderr:errOut });
// use logger like console
// const myN = 5;
// logger.log("count: %d", myN);
const myO = {id:100,msg:"Hello World"};
logger.log(myO);
const myMsg = "error was fired";
logger.error("what happend: %s", myMsg);