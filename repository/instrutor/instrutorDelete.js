import Instrutor from "../../models/Instrutor.js";

const instrutorDelete = async (req, res, next) => {
    try {
        await Instrutor.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Instrutor excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};

export default instrutorDelete;