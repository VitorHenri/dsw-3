import { StarWarsController } from '../src/controllers/StarWarsController';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';

export class SetupServer extends Server{
    constructor(private port=3000){
        super()
    }


    public init():void{
        this.setupExpress()
        this.setupController
    }

    public setupExpress():void{

        //Método para configurar o Express
        //esse método usa um processador JSON
        //essa configuração é padrão de ambientes
        //com Node.js + Typescript + Express
        this.app.use(bodyParser.json)
    }

    public setupController():void{
        //Criação de uma instância do StarWarsController
        //Adicionar uma instância para servidor(server)
        const starWarsController = new StarWarsController()
        this.addControllers([starWarsController])
    }

    public getApp():Application{
        return this.app
    }
}