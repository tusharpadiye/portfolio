const mongoose = require('mongoose');
const mURL='mongodb+srv://tushar07padiye:tushar123@mydata.q8h8jjv.mongodb.net/informationown?retryWrites=true&w=majority' // add password and database name before ?retryWr
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


