import express, { Request, Response } from 'express';

import { env } from '@/config/env';

const PORT = env.port;

const app = express();

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Template is ready.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
