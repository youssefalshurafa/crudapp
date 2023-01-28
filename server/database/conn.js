import mongoose from 'mongoose';

const MONGO_URI =
  'mongodb+srv://youssef:youssef123@cluster0.rpptrcl.mongodb.net/?retryWrites=true&w=majority';
async function connect() {
  try {
    mongoose.set('strictQuery', true);
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState == 1) {
      console.log('Database connected');
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
}

export default connect;
