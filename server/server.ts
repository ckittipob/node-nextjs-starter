import express, { Application, Request, Response } from 'express';
import path from 'path';
import connectDB from './config/db';
import exampleRouter from './routes/api/example';
import userRouter from './routes/api/users';
import authRouter from './routes/api/auth';
import cors from 'cors';
import cookieSession from 'cookie-session';

const app: Application = express();

app.set('trust proxy', 1);

app.use(
    cookieSession({
        signed: false,
        secure: false,
        //secure: process.env.NODE_ENV != 'test'
    })
);

app.use(cors());

//Connect Database
connectDB();

//Init Middleware
 const middlewareOption:any = {extended: false}
 app.use(express.json(middlewareOption));


//Example Routes
app.use('/api/examples', exampleRouter);

//Users & Auth Routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);


// Server static assets
app.use(express.static('build'));

// Serve built frontend, if have one.
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})


//Running Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

