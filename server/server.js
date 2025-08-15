import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import connectDB from './config/mongodb.js'

const PORT = process.env.PORT  || 4000
const app=express()
await connectDB()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>res.send("API Working"))

app.listen(PORT,()=>console.log("Server Running on port : "+PORT))