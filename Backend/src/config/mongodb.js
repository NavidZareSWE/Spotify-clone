import mongoose from "mongoose";

const connectDB = async () => {
  // This sets up an event listener on the Mongoose connection object to handle the "connected" event3
  // When the "connected" event is triggered, the following callback function is executed
  mongoose.connection.on("connected", () => {
    console.log("Connection to ⩤ Database ⩥ established.");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
};

export default connectDB;
