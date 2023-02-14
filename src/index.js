import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routes/usersRouter.js';

const app = express();

app.use(json());
app.use(cors());

app.use(userRouter);


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}...`));