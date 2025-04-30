import 'express-async-errors';

import CONFIG from '@/config/env.config';
import apiRouter from '@/config/routes';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandler.middleware';
import notFound from './middleware/notFound.middleware';

const app = express();

// 1) Security headers
app.use(helmet());

// 2) CORS
app.use(cors());

// 3) Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4) Logging
app.use(morgan('dev'));

// 5) Mount API
app.use('/api', apiRouter);

// 6) 404 + Error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(CONFIG.server.port, () => {
  console.log(
    `🚀 Server running in ${CONFIG.env} mode on port ${CONFIG.server.port}`,
  );
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

export default app;
