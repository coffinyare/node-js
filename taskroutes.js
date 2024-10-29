const {create} = require("domain")
const {gettasks,createtask,updatetask,Deletetask}
const  taskroutes=(req,res)=>{

    //1000 define all the routes
    
    if( req.method==='GET')(
       gettasks(req,res)
    ) 
    else if ( req.method==='POST')(
        createtask(req,res)
    ) 
       else if ( req.method==='PATCH')(
        updatetask(req,res)
    )  
      else if ( req.method==='DELETE')(
        daletetask(req,res)
   
    ) 
   else(
    res.writeHead(404,'not found ',('content-type'),
    res.end(JSON.stringify({
        message :'page not found'
    }))
    )
       
    )


}
module.exports= taskroutes;