import mongoose from "mongoose"

mongoose.connect("mongodb+srv://isabela:123@cluster0.z1rnx9k.mongodb.net/desafioNode");

let db = mongoose.connection;

export default db