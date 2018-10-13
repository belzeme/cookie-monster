import cookieParser = require('cookie-parser');
import { Request, Response, Router } from 'express';

export const CookieRouter: Router = Router();

CookieRouter.use(cookieParser());

CookieRouter.get('/',  (request: Request, response: Response) => {
    // tslint:disable-next-line:no-console
    console.log(request.cookies);
    // tslint:disable-next-line:no-console
    console.log(request.signedCookies);

    response.send(request.cookies);
});
