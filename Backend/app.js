import express from "express";
import dotenv from "dotenv"
dotenv.config()


const app = express();
app.get('/',(res,req) =>{
res.send('Hello ji ')
res.end()
})

const PORT = process.env.PORT

app.listen(PORT)
console.log(`server started on port :${PORT}`)