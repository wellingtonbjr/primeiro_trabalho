import GrupoMuscular from "../../models/GrupoMuscular.js";

const grupoMuscularUpdate = async (req, res, next) => {
    try {
        const grupoMuscularUpdate = await GrupoMuscular.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(grupoMuscularUpdate);
    } catch (error) {
        next(error);
    }
};

export default grupoMuscularUpdate;