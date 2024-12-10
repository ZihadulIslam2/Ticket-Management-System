import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://zihadul708:01882343242@nodetuts.xnfrv.mongodb.net/ticket-management-system?retryWrites=true&w=majority&appName=nodetuts')
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Database connection failed', error)
    process.exit(1)
  }
}

export default connectDB
