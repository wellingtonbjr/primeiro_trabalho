import instrutorCreate from "../repository/instrutor/instrutorCreate.js";
import instrutorDelete from '../repository/instrutor/instrutorDelete.js';
import instrutorReadAll from '../repository/instrutor/instrutorReadAll.js';
import instrutorReadById from '../repository/instrutor/instrutorReadById.js';
import instrutorUpdate from '../repository/instrutor/instrutorUpdate.js';

export const createInstrutor = async (req, res, next) => {
    instrutorCreate(req, res, next);
};

export const deleteInstrutor = async (req, res, next) => {
    instrutorDelete(req, res, next);
};

export const getInstrutores = async (req, res, next) => {
    instrutorReadAll(req, res, next);
};

export const getInstrutor = async (req, res, next) => {
    instrutorReadById(req, res, next);
};

export const updateInstrutor = async (req, res, next) => {
    instrutorUpdate(req, res, next);
};
