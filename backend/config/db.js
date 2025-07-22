import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://vancrajput00:1hmsX7P1slooFzoB@cluster0.glbpfnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
   
}
//vancrajput00
//1hmsX7P1slooFzoB

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.

//dsasdf2004
//bWLMuTTY2HIAx3Ak