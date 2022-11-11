import GrupoMuscular from "../../models/GrupoMuscular.js";

const grupoMuscularReadAll = async (req, res, next) => {
    try {
        const gruposMusculares = await GrupoMuscular.find();
        res.status(200).json(gruposMusculares);
    } catch (error) {
        next(error);
    }
};

export default grupoMuscularReadAll;