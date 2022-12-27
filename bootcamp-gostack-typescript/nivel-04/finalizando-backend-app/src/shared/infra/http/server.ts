import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import 'shared/container';
import '@shared/infra/typeorm';

import { errors } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import upload from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from '@shared/infra/http/routes';
import rateLimiter from './middlewares/rateLimiter';

const server = express();

server.use(cors());
server.use(express.json());
server.use('/files', express.static(upload.uploadsFolder));
server.use(rateLimiter);
server.use(routes);

server.use(errors());

server.use(
  (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  },
);

server.listen(3333, () => console.log('Server Started on 3333!!!'));
