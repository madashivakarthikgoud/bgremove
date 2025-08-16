import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

await connectDB()

app.use(express.json())

// Enable CORS properly
app.use(cors({
    origin: ['http://localhost:5173'], // your frontend URL
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type','Authorization']
}))

app.get('/', (req, res) => res.send("API Working"))

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.listen(PORT, () => console.log("Server Running on port:", PORT))
