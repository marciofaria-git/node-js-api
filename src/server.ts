import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const server_port = process.env.SERVER_PORT

const app = express();

app.get("/", (request, response)=>{
  return response.json({message:"Hello World"});
})


app.listen(server_port, ()=> console.log(`Server is Running on port ${server_port} 🍷🗿`))