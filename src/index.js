import express from 'express';
import { join } from 'path';
const app = express();

app.use(express.static(join(__dirname, 'frontend')));

app.listen(3000, () => console.log('Chessington is ready to go!'));