import TipoExercicio from "../../models/TipoExercicio.js";

const tipoExercicioDelete = async (req, res, next) => {
    try {
        await TipoExercicio.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tipo de Exercicio excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};

export default tipoExercicioDelete;