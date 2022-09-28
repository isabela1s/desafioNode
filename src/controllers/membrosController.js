import membros from "../models/Membro.js";

class MembroController {

    static listarMembros = (req, res) =>
    {
        membros.find((err, membros) => {
        res.status(200).json(membros)
    })
}

    static cadastrarMembro =(req, res) =>
    {
        let membro = new membros(req.body);

        membro.save((err) =>
        {
            if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar membro `})
            }else {
                res.status(201).send(membro.toJSON())
            }
            
        })
    }

    static atualizarMembro = (req, res) => {
        const id = req.params.id;

        membros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'membro atualizado com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }

        })
    }

    static listarMembroPorId = (req, res) => {
        const id = req.params.id;

        membros.findById()
        .populate('departamento', 'departamento')
        .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - id do livro`})
            }
            else{
                res.status(200).send(membros);
            }

        })
    }

    static excluirMembro = (req, res) => {
        const id = req.params.id;

        membros.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'membro removido com sucesso'})

            }
            else{res.status(500).send({message: err.message})}
        })
    }}

export default MembroController