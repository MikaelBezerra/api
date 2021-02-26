import 'reflect-metadata'
import express from 'express';
const app = express();

import './database'

app.listen(5000, () => console.log('Esta rodando irmão'))