const express = require('express')
const app = express()
const port = 5000
const connector = require("./db")

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://64b0154b7f7c0403b0dc78d0--helpful-llama-743214.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept , Authorization"
  );
  next();
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

connector();

  app.use(express.json())
app.use('/api',require("./Routes/Display"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

