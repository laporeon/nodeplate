import { NextFunction, Request, Response } from 'express';

import { BaseError } from '@/errors/BaseError';

export const errorHandler = (
  err: Error,
  _: Request,
  response: Response,
  __: NextFunction
) => {
  if (err instanceof BaseError) {
    response.status(err.statusCode).json({
      error: err.name,
      message: err.message,
      timestamp: new Date().toISOString(),
    });

    return;
  }

  response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
};
