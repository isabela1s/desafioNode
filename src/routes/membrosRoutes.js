import express from "express";
import MembroController from "../controllers/membrosController.js";

const router = express.Router();

router
    .get("/membros", MembroController.listarMembros)
    .get("/membro/:id", MembroController.listarMembroPorId)
    .post("/membros", MembroController .cadastrarMembro)
    .put("/membros/:id", MembroController.atualizarMembro)
    .delete("/membros/:id", MembroController.excluirMembro)
    export default router;