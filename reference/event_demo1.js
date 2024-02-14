console.log("events_demo1");
import url from 'node:url';
import events from 'node:events';
import { EventEmitter } from 'node:events';

//create class
class MyEmitter extends EventEmitter {}

//init Object
const myE1 = new MyEmitter();
const myE2 = new EventEmitter();
// NodeJS.EventEmitter.on() method adds Event listener to "myevent"
myE1.on('myevent1', () => console.log('fired:event from instance of my class extends EventEmitter'));
myE2.on('myevent2', () => console.log("fired:event from instance of EventEmitter"));
// init "myevent" 
myE1.emit("myevent1");
myE2.emit("myevent2");
myE1.emit("myevent1");
myE2.emit("myevent2");



import {Console} from 'node:console';
const myC = new Console();
