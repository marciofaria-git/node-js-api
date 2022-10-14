import express from 'express'
import * as dotenv from 'dotenv'
import { categoiresRoutes } from './routes/categories.routes';

dotenv.config()

const server_port = process.env.SERVER_PORT

const app = express();

app.use(express.json())

app.use(categoiresRoutes)


app.listen(server_port, ()=> console.log(`Server is Running on port ${server_port} 🍷🗿`))