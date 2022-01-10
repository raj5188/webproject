const http = require("http");
const fs = require("fs");
const port = process.env.port;

const handleReadFile = (fileName,statusCode,req,res)=>{
    fs.readFile(fileName, "utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.writeHead(statusCode,{"content-type":"text/html"});
             res.write(data);
             res.end();
        }
    });
}
const server = http.createServer((req,res)=>{
   if(req.url === "/"){
       handleReadFile("index.html",200,req,res);
   }
   else if(req.url ==="/about"){
    handleReadFile("about.html",200,req,res);
   }
   else if(req.url === "/contact"){
    handleReadFile("contact.html",200,req,res);
   }
   else{
    handleReadFile("error.html",404,req,res);
   }
});

server.listen(port,()=>{
    console.log(`server is running`);
})