import { Router, RequestHandler } from "express";
import {
  getAllPlayers,
  getPlayerById,
  getPlayersByTeam,
  searchPlayers,
  createPlayer,
  deletePlayer,
  transferPlayer,
  updatePlayerSalary,
} from "../controllers/playerController";

const router = Router();

// GET all players
router.get("/", getAllPlayers as RequestHandler);

// GET search players by name
router.get("/search", searchPlayers as RequestHandler);

// GET players by team
router.get("/team/:teamId", getPlayersByTeam as RequestHandler);

// GET player by ID
router.get("/:id", getPlayerById as RequestHandler);

// POST create new player
router.post("/", createPlayer as RequestHandler);

// DELETE player
router.delete("/:id", deletePlayer as RequestHandler);

// PATCH transfer player to another team
router.patch("/:id/transfer", transferPlayer as RequestHandler);

// PATCH update player salary
router.patch("/:id/salary", updatePlayerSalary as RequestHandler);

export default router;
