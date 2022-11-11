import Aluno from "../../models/Aluno.js";

const alunoDelete = async (req, res, next) => {
    try {
        await Aluno.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Aluno excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};

export default alunoDelete;