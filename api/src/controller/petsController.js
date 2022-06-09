import { Router } from "express";
import { cadastrarPet, consultarPet } from '../repository/petsRepository.js'

const server = Router();

server.post('/pets/nome', async (req, resp) => {
    try{
        const { nome } = req.query;

        const resposta = await cadastrarPet(nome);
        resp.send(resposta);

    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/pet', async (req, resp) => {
    try {
        const respost = await consultarPet();
        resp.send(respost);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;