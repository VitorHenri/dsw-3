import { Controller, Get} from '@overnightjs/core';
import { Request, Response } from 'express';

//Controller que processa métodos
//da API swapi API
//Iniciamente vamos criar os recursos Mock
//Usando alguns objetos hard-coded
//Request & Response
//Get endpoint/api/planets

//Uma API em HTTP tem vários verbos
//GET,PUT,POST,HEAD,OPTION
//Usamos um recurso para comunicação

//Request & Response
//   | 
//  GET [endpoint/api/planets]
//   |            |
// verbo       endereço & Recurso

// A comunicação ocorre via parâmetros
@Controller('planets')
export class StarWarsController{

    @Get('')
    public getStarwarsPlanet(request:Request,response:Response):void
    {
        //1.  Usar hard-coded um retorno
        //2. usar a chamada real da API
        const responseBody = {}
        response.send({responseBody})
    }
}