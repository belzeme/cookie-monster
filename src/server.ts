import express = require('express');

import { CookieRouter, WelcomeRouter } from './controllers';

export const app = express();
app.use('/welcome', WelcomeRouter);
app.use('/', CookieRouter);
