const express = require("express")
const apiRoute = require("./Routes/ApiRoute")
const app = express()
const PORT = 4005 
const cors = require("cors")
app.use(cors())
app.use("/",apiRoute)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})