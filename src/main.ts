import * as winston from 'winston';
import { app } from './server';

winston.add(new winston.transports.Console());
const port: number | string = process.env.PORT || 3000;
app.listen(port, () => {
    winston.log('info', `Server set to listen on 127.0.0.1:${port}`);
});
