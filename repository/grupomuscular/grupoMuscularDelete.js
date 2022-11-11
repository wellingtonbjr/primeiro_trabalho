import GrupoMuscular from "../../models/GrupoMuscular.js";

const grupoMuscularDelete = async (req, res, next) => {
    try {
        await GrupoMuscular.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Grupo Muscular excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};

export default grupoMuscularDelete;