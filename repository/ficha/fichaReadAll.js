import Ficha from "../../models/Ficha.js";

const fichaReadAll = async (req, res, next) => {
    try {
        const fichas = await Ficha.find();
        res.status(200).json(fichas);
    } catch (error) {
        next(error);
    }
};

export default fichaReadAll;