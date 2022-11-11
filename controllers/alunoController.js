import alunoCreate from "../repository/aluno/alunoCreate.js";
import alunoDelete from '../repository/aluno/alunoDelete.js';
import alunoReadAll from '../repository/aluno/alunoReadAll.js';
import alunoReadById from '../repository/aluno/alunoReadById.js';
import alunoUpdate from '../repository/aluno/alunoUpdate.js';

export const createAluno = async (req, res, next) => {
    alunoCreate(req, res, next);
};

export const deleteAluno = async (req, res, next) => {
    alunoDelete(req, res, next);
};

export const getAluno = async (req, res, next) => {
    alunoReadById(req, res, next);
};

export const getAlunos = async (req, res, next) => {
    alunoReadAll(req, res, next);
};

export const updateAluno = async (req, res, next) => {
    alunoUpdate(req, res, next);
};



