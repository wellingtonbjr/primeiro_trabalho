import Aluno from "../../models/Aluno.js";

const alunoReadById = async (req, res, next) => {
    try {
        const aluno = await Aluno.findById(req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        next(error);
    }
};

export default alunoReadById;