import Ficha from "../../models/Ficha.js";

const fichaUpdate = async (req, res, next) => {
    try {
        const fichaUpdate = await Ficha.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(fichaUpdate);
    } catch (error) {
        next(error);
    }
};

export default fichaUpdate;