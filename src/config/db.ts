import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Database connection failed', error)
    process.exit(1)
  }
}

export default connectDB
