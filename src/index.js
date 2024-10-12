import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
// APPROCH 1
/*
// type 1 of connection 

function connectDB(){}
connectDB()

// type 2 of connection--- to handle error we use aysnc arrow function

( async () => {
    try{
        mongoose.connect(${process.env.MONGO_URI}/${DB_NAME})
    }
    catch(error){
        console.log("ERROR : ", error)
        throw err
        }
})
app.listen(process.env.PORT,() => {
    console.log(`server is running on port ${process.env.PORT} `);
})


()
*/


// APPROCH 2