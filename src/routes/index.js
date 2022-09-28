import express from "express";
import membros from "./membrosRoutes.js"
import departamentos from "./departamentosRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) =>
    {
        res.status(200).send({titulo: "curso de node"})
    })

    app.use(
        express.json(),
        membros,
        departamentos
    )
}

export default routes