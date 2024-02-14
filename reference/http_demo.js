console.log("http_demojs");
import http from 'node:http';

// create local  server Object to receiv data
const server1 = http.createServer((req,res)=>{
    // write response // writeHead only once
    res.writeHead(200,{ 'Content-Type': 'application/json' });
    // Object to JSON string
    const myres1 = JSON.stringify({ data: "Hello World from myres1", });
    res.end(myres1);
});
const server = http.createServer((req, res) => {
    const myT = new Date();
    const myH = myT.getHours();
    const myM = myT.getMinutes();
    let myTtext = "";
    if(myM>9) { myTtext = `${myH}:${myM}`; }
    else { myTtext = `${myH}:0${myM}`; }
    res.write(`<h1>Hello World ${myTtext}</h1>`,()=>{ console.log("write  more to listen on 5000"); });
    res.end();
})
.listen(5000, ()=>console.log('Server is running on 5000'))
;
const server2 = http.createServer((req,res)=>{
    const body = "<b>Hello World2b</b>";
    res.writeHead(200, {
        'Content-Type':'text/html',
        'Content-Length': Buffer.byteLength(body),
    });
    res.end(body);
    res.writeHead
});
server2.listen(8002,()=> { console.log("server2 is listenning to connection on port 8002"); })

server1.listen(8000,()=>{ console.log("server1 is listenning to connection on port 8000") });
// server.listen(8000, ()=>{})