import Instrutor from "../../models/Instrutor.js";

const instrutorReadAll = async (req, res, next) => {
    try {
        const instrutores = await Instrutor.find();
        res.status(200).json(instrutores);
    } catch (error) {
        next(error);
    }
};

export default instrutorReadAll;