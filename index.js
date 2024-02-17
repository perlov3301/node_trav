console.log("indexjs");
import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url'; 

 function myDir() {
    const myurl = import.meta.url;
    const mypath = fileURLToPath(myurl);
    const mydir = path.dirname(mypath);
    return mydir;
 }
 function myPublic () {
    const myurl = import.meta.url;
    const mypath = fileURLToPath(myurl);
    const mydir = path.dirname(mypath);
    const pathtext = path.join(mydir, 'public');
     return pathtext;
 }
 function myTime () {
    const myT = new Date();
    const myH = myT.getHours();
    const myM = myT.getMinutes();
    let myTt = "";
    if (myM<9) { myTt= `${myH}:0${myM}`; }
    else { myTt= `${myH}:${myM}`; }
    return myTt;
 }
 function myTtext (a) {
    const myT = new Date();
    const myH = myT.getHours();
    const myM = myT.getMinutes();
    let myTt = "";
    if(myM<9) { myTt = `${myH}:0${myM}`; }
    else { myTt = `${myH}:${myM}`; }
    const myCss = 'style="text-align:center"';
    return `<h1 ${myCss}>${a} ${myTt}</h1>`;
};
const server = http.createServer((req,res)=>{
    // build file path 
    const myp = myPublic();
    let myu = req.url === '/' ? 'index.html':req.url;
    let filePath = path.join(myp,myu); // public/index.html
    // extension of file
    let myExtName = path.extname(filePath);
    //content-type : text/html application/json text/css
    let contentType = 'text/html';//default
    // check ext and set content type
    switch(myExtName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    // read file
    fs.readFile(filePath,'utf8', (err, content)=>{
        if(err) { // errno code syscall path
            //  console.log( `keys of err: ${Object.keys(err)}`); 
            if (err.code==='ENOENT') { // not found error
              //  const myp = myPublic();
                fs.readFile(path.join(myDir(), 'public','404.html'), (err, content)=>{
                    if (err) throw err;
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content,'utf8');
                });
              } // err.code==='enoent'
              else {//some server error
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end(myTtext(`server error: ${err.code}`));
              }
            } // if err
        else { // success
          console.log(`file ${filePath} was read ${myTime()}`);
          res.writeHead(200, {'Content-Type': contentType});
          res.end(content, 'utf8');
        }
    });
});
// server.listen(5000, ()=>console.log('Server is running on 5000'));
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
 // res.writeHead(200, { 'Content-Type': 'text/html' });
// res.end(myTtext("Home"))

