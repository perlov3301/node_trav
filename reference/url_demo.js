console.log("url_demo");
import url from 'node:url';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active&name=Alex');
//serialized URL: just string
console.log(`myUrl:            ${myUrl}`);
console.log(`myUrl.toString(): ${myUrl.toString()}`);
// Host (root domain)
console.log(`host(root Domain): ${myUrl.host}`);
// Hostname (does not  get port)
console.log(`hostname: ${myUrl.hostname}`);
// pathname
console.log(`pathname: ${myUrl.pathname}`)
// serialized query=search parameters
console.log(`serialized query for search: ${myUrl.search}`);
// query params (without question mark)=params object
console.log(`myUrl.searchParams-log combined with text: ${myUrl.searchParams}`);
console.log("searchParams=parameters Object-like without text:");
console.log(myUrl.searchParams);
// add param
myUrl.searchParams.append("familiyName", "Perlov");
console.log(myUrl.searchParams);
// to loop through params
console.log("through searchParams with 'forEach' loop")
myUrl.searchParams.forEach((value, name) => {
    console.log(`name: ${name} value: ${value}`); 
});