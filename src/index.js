import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(json());


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}...`));