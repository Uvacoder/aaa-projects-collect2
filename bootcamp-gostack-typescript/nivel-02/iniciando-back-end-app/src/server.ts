import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import 'express-async-errors';
import 'reflect-metadata';
import upload from './config/upload';
import './database';
import AppError from './errors/AppError';
import routes from './routes';


const server = express();

server.use(cors());
server.use(express.json());
server.use('/files', express.static(upload.directory));
server.use(routes);

server.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error'
  });
});

server.listen(3333, () => console.log('Server Started on 3333!!!'));
