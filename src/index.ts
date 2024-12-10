import express from 'express'
import connectDB from './config/db'

const app = express()
app.use(express.json())

connectDB()

app.listen(5000, () => console.log('Server running on port 5000'))
