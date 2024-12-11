import express from 'express'
import connectDB from './config/db'
import authRoutes from './routes/authRoutes'
import adminRoutes from './routes/adminRoutes'
import ticketRoutes from './routes/ticketRoutes'
import userRoutes from './routes/userRoutes'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

connectDB()

// Use routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use('/', ticketRoutes)
app.use('/api', userRoutes)

app.listen(5000, () => console.log('Server running on port 5000'))
