import mongoose from "mongoose";
import Aluno from "../models/Aluno.js";
import bcrypt from "bcryptjs";

const connectDatabase = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Desconectado do MongoDB.");
});

mongoose.connection.on("connected", () => {
    console.log("Conectado ao MongoDB.");
    seedDatabase();
});

mongoose.connection.on("error", (error) => {
    console.log(`Erro no MongoDB:\n${error}`);
});

const seedDatabase = async () => {
    // let salt = await bcrypt.genSalt(10);
    // const seedAlunos = [
    //     {
    //         nome: "João",
    //         dataNascimento: new Date(2000, 1, 1),
    //         sexo: "M",
    //         email: "joao@email.com",
    //         senha: await bcrypt.hash("123456", salt),
    //         ativo: true
    //     },
    //     {
    //         nome: "Maria",
    //         dataNascimento: new Date(2010, 1, 1),
    //         sexo: "F",
    //         email: "maria@email.com",
    //         senha: await bcrypt.hash("123456", salt),
    //         ativo: true
    //     },
    //     {
    //         nome: "José",
    //         dataNascimento: new Date(2012, 1, 1),
    //         sexo: "M",
    //         email: "jose@email.com",
    //         senha: await bcrypt.hash("123456", salt),
    //         ativo: false
    //     }
    // ];
    // //await Aluno.deleteMany({});
    // if (await Aluno.countDocuments({}) === 0) {
    //     Aluno.insertMany(seedAlunos);
    //     console.log("Dados iniciais inseridos com sucesso.");
    // }
}

export default connectDatabase;
