import cookieParser = require('cookie-parser');
import { Request, Response, Router } from 'express';
import { getUserByID } from '../services/random-profile.service';

export const CookieRouter: Router = Router();

CookieRouter.use(cookieParser());

// tslint:disable:no-console
CookieRouter.get('/',  (request: Request, response: Response) => {
    const {session_id: cookieID} = request.cookies;
    console.log(request.cookies);
    console.log(request.signedCookies);
    response.send(getUserByID(cookieID));
});
