import express = require('express');
import { CookieRouter, UserRouter, WelcomeRouter } from './controllers';

export const app = express();
app.use('/welcome', WelcomeRouter);
app.use('/', CookieRouter);
app.use('/user', UserRouter);
