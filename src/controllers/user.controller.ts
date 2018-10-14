import * as BodyParser from 'body-parser';
import { Request, Response, Router } from 'express';
import { getAuthenticatedUser, getUserByID, randomProfile } from '../services/random-profile.service';

// tslint:disable:no-console
export const UserRouter: Router = Router();
UserRouter.use(BodyParser.json());
UserRouter.get('/random', (request: Request, response: Response) => {
    console.log(request);
    response.send(randomProfile());
});

UserRouter.post('/login', (request: Request, response: Response) => {
    const {email, password} = request.body;
    const user = getAuthenticatedUser(email, password);
    console.log(request.body);
    console.log(user);
    user ? response.send(user.id) : response.send('user not found or wrong password');
});

UserRouter.get('/:id', (request: Request, response: Response) => {
    const { id } = request.params;
    console.log(id);
    response.send(getUserByID(id));
});
