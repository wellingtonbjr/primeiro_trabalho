import grupoMuscularCreate from "../repository/grupomuscular/grupoMuscularCreate.js";
import grupoMuscularDelete from '../repository/grupomuscular/grupoMuscularDelete.js';
import grupoMuscularReadAll from '../repository/grupomuscular/grupoMuscularReadAll.js';
import grupoMuscularReadById from '../repository/grupomuscular/grupoMuscularReadById.js';
import grupoMuscularUpdate from '../repository/grupomuscular/grupoMuscularUpdate.js';

export const createGrupoMuscular = async (req, res, next) => {
    grupoMuscularCreate(req, res, next);
};

export const deleteGrupoMuscular = async (req, res, next) => {
    grupoMuscularDelete(req, res, next);
};

export const getGruposMusculares = async (req, res, next) => {
    grupoMuscularReadAll(req, res, next);
};

export const getGrupoMuscular = async (req, res, next) => {
    grupoMuscularReadById(req, res, next);
};

export const updateGrupoMuscular = async (req, res, next) => {
    grupoMuscularUpdate(req, res, next);
};
