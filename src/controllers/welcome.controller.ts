import { Request, Response, Router } from 'express';
import * as winston from 'winston';

export const WelcomeRouter: Router = Router();

WelcomeRouter.get('/', (request: Request, response: Response) => {
    winston.log('info', `${request}`);
    response.send('Hello World');
});

WelcomeRouter.get('/:name', (request: Request, response: Response) => {
    const {name} = request.params;
    winston.log('info', `${request}`);
    response.send(`Hello ${name}`);
});
