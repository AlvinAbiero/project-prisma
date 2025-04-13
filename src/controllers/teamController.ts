import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

export const getAllTeams = async (_req: Request, res: Response) => {
  try {
    const teams = await prisma.team.findMany();
    res.status(200).json(teams);
    return;
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch teams" });
  }
};

export const getTeamById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const team = await prisma.team.findUnique({
      where: { id: Number(id) },
      include: { players: true },
    });

    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.status(200).json(team);
    return;
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch team" });
  }
};

export const createTeam = async (req: Request, res: Response) => {
  try {
    const { name, logo, shirtColor, foundedYear } = req.body;

    const newTeam = await prisma.team.create({
      data: {
        name,
        logo,
        shirtColor,
        foundedYear: foundedYear ? Number(foundedYear) : null,
      },
    });

    res.status(201).json(newTeam);
    return;
  } catch (error) {
    return res.status(500).json({ error: "Failed to create team" });
  }
};

export const updateTeamShirtColor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { shirtColor } = req.body;

    const updatedTeam = await prisma.team.update({
      where: { id: Number(id) },
      data: { shirtColor },
    });

    res.status(200).json(updatedTeam);
    return;
  } catch (error) {
    return res.status(500).json({ error: "Failed to update team shirt color" });
  }
};

export const deleteTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if team has players before deleting
    const team = await prisma.team.findUnique({
      where: { id: Number(id) },
      include: { players: true },
    });

    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    if (team.players.length > 0) {
      return res.status(400).json({
        error:
          "Cannot delete team with players. Transfer or delete players first.",
      });
    }

    await prisma.team.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Team deleted successfully" });
    return;
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete team" });
  }
};
