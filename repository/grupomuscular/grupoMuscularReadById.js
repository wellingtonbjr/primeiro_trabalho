import GrupoMuscular from "../../models/GrupoMuscular.js";

const grupoMuscularReadById = async (req, res, next) => {
    try {
        const grupoMuscular = await GrupoMuscular.findById(req.params.id);
        res.status(200).json(grupoMuscular);
    } catch (error) {
        next(error);
    }
};

export default grupoMuscularReadById;