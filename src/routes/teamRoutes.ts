import { RequestHandler, Router } from "express";
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeamShirtColor,
  deleteTeam,
} from "../controllers/teamController";

const router = Router();

// GET all teams
router.get("/", getAllTeams as RequestHandler);

// GET one team's details by ID
router.get("/:id", getTeamById as RequestHandler);

// POST create new team
router.post("/", createTeam as RequestHandler);

// PATCH update team shirt color
router.patch("/:id/shirt-color", updateTeamShirtColor as RequestHandler);

// DELETE team
router.delete("/:id", deleteTeam as RequestHandler);

export default router;
