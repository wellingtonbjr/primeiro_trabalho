import TipoExercicio from "../../models/TipoExercicio.js";

const tipoExercicioReadAll = async (req, res, next) => {
    try {
        const tipoExercicios = await TipoExercicio.find();
        res.status(200).json(tipoExercicios);
    } catch (error) {
        next(error);
    }
};

export default tipoExercicioReadAll;