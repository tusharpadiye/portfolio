const express = require('express')
const app = express()
const port = 5000
const connector = require("./db")



app.get('/', (req, res) => {
  res.send('Hello World!')
})

connector();

  app.use(express.json())
app.use('/api',require("./Routes/Display"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","https://64b00e96d03a7000abb3dd30--gorgeous-starship-509d35.netlify.app/");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept , Authorization"
    );
    next();
  })
