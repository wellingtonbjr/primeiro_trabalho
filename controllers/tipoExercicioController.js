import tipoExercicioCreate from "../repository/tipoexercicio/tipoExercicioCreate.js";
import tipoExercicioDelete from '../repository/tipoexercicio/tipoExercicioDelete.js';
import tipoExercicioReadAll from '../repository/tipoexercicio/tipoExercicioReadAll.js';
import tipoExercicioReadById from '../repository/tipoexercicio/tipoExercicioReadById.js';
import tipoExercicioUpdate from '../repository/tipoexercicio/tipoExercicioUpdate.js';

export const createTipoExercicio = async (req, res, next) => {
    tipoExercicioCreate(req, res, next);
};

export const deleteTipoExercicio = async (req, res, next) => {
    tipoExercicioDelete(req, res, next);
};

export const getTipoExercicios = async (req, res, next) => {
    tipoExercicioReadAll(req, res, next);
};

export const getTipoExercicio = async (req, res, next) => {
    tipoExercicioReadById(req, res, next);
};

export const updateTipoExercicio = async (req, res, next) => {
    tipoExercicioUpdate(req, res, next);
};
