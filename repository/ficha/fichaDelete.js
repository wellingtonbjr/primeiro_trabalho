import Ficha from "../../models/Ficha.js";

const fichaDelete = async (req, res, next) => {
    try {
        await Ficha.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Ficha excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};

export default fichaDelete;