import mongoose from "mongoose";
const connection = {};

export async function connectDb(){
    if (connection.isConnected){
        console.log('Connected mongo')
        return
    }
    if (mongoose.connections.length > 0){
        connection.isConnected=mongoose.connections[0].readyState
        if(connection.isConnected === 1) {
            console.log("Use previous connection to the database.")
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("New connection to db")
    connection.isConnected=db.connections[0].readyState
}

export async function disconnectDb(){
    if (connection.isConnected){
        if (process.env.NODE_END==="production") {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log("not disconnected from the database")
        }
    }
}

const db = {connectDb, disconnectDb} ;
export default db;
