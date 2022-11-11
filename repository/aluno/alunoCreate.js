import Aluno from "../../models/Aluno.js";

const alunoCreate = async (req, res, next) => {
    const aluno = new Aluno(req.body);
    try {
        const createdAluno = await aluno.save();
        res.status(201).json(createdAluno);
    } catch (error) {
        next(error);
    }
};

export default alunoCreate;