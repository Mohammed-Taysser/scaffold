import { Request, Response } from 'express';

function healthCheck(request: Request, response: Response) {
  response.status(200).json({ status: 'ok', uptime: process.uptime() });
}

const coreController = {
  healthCheck,
};

export default coreController;
