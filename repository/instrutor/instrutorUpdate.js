import Instrutor from "../../models/Instrutor.js";

const instrutorUpdate = async (req, res, next) => {
    try {
        const instrutorUpdate = await Instrutor.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(instrutorUpdate);
    } catch (error) {
        next(error);
    }
};

export default instrutorUpdate;