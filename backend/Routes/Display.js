const express = require("express");
const router = express.Router();

router.post('/displaydata',(req,res)=>{
    try{
        //console.log(global.edudata)
        res.send([ global.edudata, global.projectdata, global.skilldata])
    }catch(error){
        
        console.error(error.message);
        res.send("Server Error")
    }
    
    })
    

    module.exports = router;