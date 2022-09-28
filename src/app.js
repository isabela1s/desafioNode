import express from "express";
import routes from "./routes/index.js"
import db from "./config/dbConnect.js"


db.on("error", console.log.bind(console, 'erro de conexao'))
db.once("open", () =>{
    console.log('conexao com banco feita')
})

const app = express();

app.use(express.json())

routes(app);


export default app



