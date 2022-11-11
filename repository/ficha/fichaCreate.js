import Ficha from "../../models/Ficha.js";

const fichaCreate = async (req, res, next) => {
    const ficha = new Ficha(req.body);
    try {
        const createdFicha = await ficha.save();
        res.status(201).json(createdFicha);
    } catch (error) {
        next(error);
    }
};

export default fichaCreate;