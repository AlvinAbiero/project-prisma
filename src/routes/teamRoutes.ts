import { Router } from 'express';
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeamShirtColor,
  deleteTeam
} from '../controllers/teamController';

const router = Router();

// GET all teams
router.get('/', getAllTeams);

// GET one team's details by ID
router.get('/:id', getTeamById);

// POST create new team
router.post('/', createTeam);

// PATCH update team shirt color
router.patch('/:id/shirt-color', updateTeamShirtColor);

// DELETE team
router.delete('/:id', deleteTeam);

export default router;