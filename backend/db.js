const mongoose = require('mongoose')

require('dotenv').config()

const mURL=process.env.LINK;
const connecttoMongodb = ()=>{
    
     mongoose.connect(mURL, { useNewUrlParser: true },(err, result)=>{
        if(err)
        {
            console.log("ERR")
        }
        else{
            console.log("Connected");
            const fetched_data =  mongoose.connection.db.collection("edudata");
            fetched_data.find({}).toArray(function(err,data){
                const projectdata = mongoose.connection.db.collection("projectdata");
                projectdata.find({}).toArray(function(err,prodata){
                    const skilldata = mongoose.connection.db.collection("skilldata");
                    skilldata.find({}).toArray(function(err,skill){
                if(err){
                    console.log(err);
                }
                else{
                    global.edudata = data;
                    global.projectdata=prodata;
                    global.skilldata=skill;
                    console.log(data);
                    console.log(prodata);
                    console.log(skill);
                    
                }
            })
        })
    })
        }
       
    });
}

module.exports = connecttoMongodb;


