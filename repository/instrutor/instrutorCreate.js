import Instrutor from "../../models/Instrutor.js";

const instrutorCreate = async (req, res, next) => {
    const instrutor = new Instrutor(req.body);
    try {
        const createdInstrutor = await instrutor.save();
        res.status(201).json(createdInstrutor);
    } catch (error) {
        next(error);
    }
};

export default instrutorCreate;