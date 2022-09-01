import { SetupServer } from '../util/server'
import supertest from "supertest";

beforeAll(()=>{
    const server = new SetupServer();
    server.init();

    global.testRequest = supertest(server.getApp())
    console.log("Executando o beforeAll")
});