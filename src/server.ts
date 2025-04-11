import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import teamRoutes from './routes/teamRoutes';
import playerRoutes from './routes/playerRoutes';
// import authRoutes from './routes/authRoutes'; // If implementing authentication

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);
// app.use('/api/auth', authRoutes); // If implementing authentication

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});