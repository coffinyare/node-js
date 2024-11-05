const http = ruquire("http");
 
const port = 9000;
const hostname='localhost';
const server= http.creatserver();
server.listen(PORT,HOSTNAME,()=>(
    console.log('server running at s{PORT}')
))