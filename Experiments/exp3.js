const http=require("http"); //import http module from nodejs
const server=http.createServer((req,res)=>{
    res.writeHead(400,{"Content-Type":"text/plain","Server":"Node.js"});//set response header
    res.end("Hello world!"); //send response to client

});
const port=5005;
server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});