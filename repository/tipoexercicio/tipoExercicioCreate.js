import TipoExercicio from "../../models/TipoExercicio.js";

const tipoExercicioCreate = async (req, res, next) => {
    const tipoExercicio = new TipoExercicio(req.body);
    try {
        const createdTipoExercicio = await tipoExercicio.save();
        res.status(201).json(createdTipoExercicio);
    } catch (error) {
        next(error);
    }
};

export default tipoExercicioCreate;