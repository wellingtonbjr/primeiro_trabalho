import Instrutor from "../../models/Instrutor.js";

const instrutorReadById = async (req, res, next) => {
    try {
        const instrutor = await Instrutor.findById(req.params.id);
        res.status(200).json(instrutor);
    } catch (error) {
        next(error);
    }
};

export default instrutorReadById;