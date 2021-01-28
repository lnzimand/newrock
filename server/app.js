import express, { request, response } from "express";
const router = express.Router();
import { json } from "body-parser";
import cors from "cors";
import morgan from "morgan";
const app = express();

import { router as sendMailRouter } from './routes/route';

app.use(morgan("combined"))
    .use(json())
    .use(cors())
    .use('/sendmail', sendMailRouter);


app.listen(process.env.PORT || 8081, () => {
    console.log(`Server listening on port ${process.env.PORT || 8081}`)
});
