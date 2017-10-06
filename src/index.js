import express from 'express';
import { join } from 'path';
const app = express();

app.use(express.static(__dirname));

app.listen(3000, () => console.log('Chessington is ready to go!'));
