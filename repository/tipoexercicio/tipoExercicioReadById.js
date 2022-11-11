import TipoExercicio from "../../models/TipoExercicio.js";

const tipoExercicioReadById = async (req, res, next) => {
    try {
        const tipoExercicio = await TipoExercicio.findById(req.params.id);
        res.status(200).json(tipoExercicio);
    } catch (error) {
        next(error);
    }
};

export default tipoExercicioReadById;