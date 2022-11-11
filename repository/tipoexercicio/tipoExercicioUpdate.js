import TipoExercicio from "../../models/TipoExercicio.js";

const tipoExercicioUpdate = async (req, res, next) => {
    try {
        const tipoExercicioUpdate = await TipoExercicio.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(tipoExercicioUpdate);
    } catch (error) {
        next(error);
    }
};

export default tipoExercicioUpdate;