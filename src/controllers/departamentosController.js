import departamentos from "../models/departamento.js";

class DepartamentoController {

    static listarDepartamentos = (req, res) =>
    {
        departamentos.find()
        .populate('departamento')
        .exec((err, departamentos) => {
        res.status(200).json(departamentos)
    })
}

    static cadastrarDepartamento =(req, res) =>
    {
        let departamento = new departamentos(req.body);

        departamento.save((err) =>
        {
            if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar departamento `})
            }else {
                res.status(201).send(departamento.toJSON())
            }
            
        })
    }

    static atualizarDepartamento = (req, res) => {
        const id = req.params.id;

        departamentos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'departamento atualizado com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }

        })
    }

    static excluirDepartamento = (req, res) => {
        const id = req.params.id;

        departamentos.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'departamento removido com sucesso'})

            }
            else{res.status(500).send({message: err.message})}
        })
    }}

export default DepartamentoController