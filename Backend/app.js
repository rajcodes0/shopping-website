import express from "express";
import dotenv from "dotenv"
import helmet from "helmet"
import productRouter from './routes/products.routes.js'; 
import connectDb from "./config/Db.js";

dotenv.config()


const app = express();
connectDb()

app.use(helmet());
app.use(express.json())
app.get('/',(req,res) =>{
res.send("hello ji ")
res.end();

})
app.use('/products', productRouter); // This will make your route: /products

const PORT = process.env.PORT

app.listen(PORT)
console.log(`server started on port :${PORT}`)