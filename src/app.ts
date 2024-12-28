import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/midleware/notFound';
import globalErrorHandler from './app/midleware/globalErrorHandler';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Your Blog Server is Running!');
});

//Not Found
app.use(notFound);

// Error Handler
app.use(globalErrorHandler);

export default app;
