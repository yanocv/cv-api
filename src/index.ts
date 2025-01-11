import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/cv', (req: Request, res: Response) => {
  const filePath = path.join(
    __dirname,
    process.env.NODE_ENV === 'production' ? 'dist/data' : 'data',
    'cv.json'
  );
  res.sendFile(filePath);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
