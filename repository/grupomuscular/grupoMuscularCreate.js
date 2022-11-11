import GrupoMuscular from "../../models/GrupoMuscular.js";

const grupoMuscularCreate = async (req, res, next) => {
    const grupoMuscular = new GrupoMuscular(req.body);
    try {
        const createdGrupoMuscular = await grupoMuscular.save();
        res.status(201).json(createdGrupoMuscular);
    } catch (error) {
        next(error);
    }
};

export default grupoMuscularCreate;