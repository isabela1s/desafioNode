import mongoose from "mongoose";

const membroSchema = new mongoose.Schema(
    {
    id: {type: String},
    nome: {type: String},
    email: {type: String},
    senha: {type: String},
    aniversario: {type: String},
    departamento: {type: mongoose.Schema.Types.ObjectId, ref: 'departamentos'},
   cargo: {type: String},
   idade: {type: String},
    }
);

const membros= mongoose.model('membros', membroSchema);

export default membros;