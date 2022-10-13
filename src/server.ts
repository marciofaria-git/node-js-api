import express from 'express'

const server_port = process.env.SERVER_PORT

const app = express();

app.listen(server_port, ()=> console.log("Server is running!"))