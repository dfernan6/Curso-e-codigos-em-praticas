import mongoose from 'mongoose';

async function connectToDatabase(){
  mongoose.connect("mongodb+srv://Dfernan6:Hatebreede%401987@cluster0.eq41cux.mongodb.net/");

return mongoose.connection;
};

export default connectToDatabase;