import { Router } from 'express';
import {
  getAllPlayers,
  getPlayerById,
  getPlayersByTeam,
  searchPlayers,
  createPlayer,
  deletePlayer,
  transferPlayer,
  updatePlayerSalary
} from '../controllers/playerController';

const router = Router();

// GET all players
router.get('/', getAllPlayers);

// GET search players by name
router.get('/search', searchPlayers);

// GET players by team
router.get('/team/:teamId', getPlayersByTeam);

// GET player by ID
router.get('/:id', getPlayerById);

// POST create new player
router.post('/', createPlayer);

// DELETE player
router.delete('/:id', deletePlayer);

// PATCH transfer player to another team
router.patch('/:id/transfer', transferPlayer);

// PATCH update player salary
router.patch('/:id/salary', updatePlayerSalary);

export default router;