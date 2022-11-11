import Aluno from "../../models/Aluno.js";

const alunoReadAll = async (req, res, next) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (error) {
        next(error);
    }
};

export default alunoReadAll;