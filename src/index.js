import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routes/usersRouter.js';
import authUrlRouter from './routes/authUrlRouter.js';
import urlRouter from './routes/urlRouter.js';

const app = express();

app.use(json());
app.use(cors());

app.use(userRouter);
app.use(urlRouter);
app.use(authUrlRouter);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}...`));