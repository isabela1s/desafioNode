import mongoose from "mongoose";

const DepartamentoSchema = new mongoose.Schema(
    {
        id: {type: String},
        departamento: {type: String}
    },
    {
        versionKey: false
    }
)

const Departamento = mongoose.model("departamento", DepartamentoSchema)

export default Departamento;