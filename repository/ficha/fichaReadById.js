import Ficha from "../../models/Ficha.js";

const fichaReadById = async (req, res, next) => {
    try {
        const ficha = await Ficha.findById(req.params.id);
        res.status(200).json(ficha);
    } catch (error) {
        next(error);
    }
};

export default fichaReadById;