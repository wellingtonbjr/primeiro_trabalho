import Aluno from "../../models/Aluno.js";

const alunoUpdate = async (req, res, next) => {
    try {
        const alunoUpdate = await Aluno.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(alunoUpdate);
    } catch (error) {
        next(error);
    }
};

export default alunoUpdate;