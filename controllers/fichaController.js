import fichaCreate from "../repository/ficha/fichaCreate.js";
import fichaDelete from '../repository/ficha/fichaDelete.js';
import fichaReadAll from '../repository/ficha/fichaReadAll.js';
import fichaReadById from '../repository/ficha/fichaReadById.js';
import fichaUpdate from '../repository/ficha/fichaUpdate.js';

export const createFicha = async (req, res, next) => {
    fichaCreate(req, res, next);
};

export const deleteFicha = async (req, res, next) => {
    fichaDelete(req, res, next);
};

export const getFicha = async (req, res, next) => {
    fichaReadById(req, res, next);
};

export const getFichas = async (req, res, next) => {
    fichaReadAll(req, res, next);
};

export const updateFicha = async (req, res, next) => {
    fichaUpdate(req, res, next);
};



