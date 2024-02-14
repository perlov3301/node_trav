console.log("indexjs");
import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url'; 
 function myPublic () {
    const myurl = import.meta.url;
    const mypath = fileURLToPath(myurl);
    const mydir = path.dirname(mypath);
    const pathtext = path.join(mydir, 'public');
     return pathtext;
 }
 function myTtext (a) {
    const myT = new Date();
    const myH = myT.getHours();
    const myM = myT.getMinutes();
    let myTt = "";
    if(myM>9) { myTt = `${myH}:${myM}`; }
    else { myTt = `${myH}:0${myM}`; }
    const myCss = 'style="text-align:center"';
    return `<h1 ${myCss}>${a} ${myTt}</h1>`;
};
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==='/') {
        const myp = myPublic();
        console.log(`myp dir: ${myp}`);
        fs.readFile(path.join(myp, 'index.html'), (err, content)=>{
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end(myTtext("Home"));
    } 
    // res.write(myTtext(),()=>{ console.log("write  more to listen on 5000"); });
    // res.end();
    
});
// server.listen(5000, ()=>console.log('Server is running on 5000'));
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

