import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; 
import jogoRoutes from './routes/jogoRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('API de Avaliação de Jogos funcionando!');
});
app.use('/api/jogos', jogoRoutes);
app.use('/api/avaliacoes', avaliacaoRoutes);
app.use('/api/auth', authRoutes)

export { app, connectDB };
