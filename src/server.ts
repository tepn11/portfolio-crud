import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoose from 'mongoose';

import { Router } from './routes'

dotenv.config();

if (!process.env.PORT || !process.env.DB_CONNECTION_STRING) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const DB_CONNECTION_STRING: string = process.env.DB_CONNECTION_STRING

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(Router)

app.get('/', (req, res) => {
    res.send('Welcome to your API!');
});

app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
});

