"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayerSalary = exports.transferPlayer = exports.deletePlayer = exports.createPlayer = exports.searchPlayers = exports.getPlayersByTeam = exports.getPlayerById = exports.getAllPlayers = void 0;
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const getAllPlayers = async (_req, res) => {
    try {
        const players = await prisma.player.findMany({
            include: { team: true },
        });
        res.json(players);
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch players" });
    }
};
exports.getAllPlayers = getAllPlayers;
const getPlayerById = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await prisma.player.findUnique({
            where: { id: Number(id) },
            include: { team: true },
        });
        if (!player) {
            return res.status(404).json({ error: "Player not found" });
        }
        res.json(player);
        return;
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to fetch player" });
    }
};
exports.getPlayerById = getPlayerById;
const getPlayersByTeam = async (req, res) => {
    try {
        const { teamId } = req.params;
        const team = await prisma.team.findUnique({
            where: { id: Number(teamId) },
        });
        if (!team) {
            return res.status(404).json({ error: "Team not found" });
        }
        const players = await prisma.player.findMany({
            where: { teamId: Number(teamId) },
            include: { team: true },
        });
        res.status(200).json(players);
        return;
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to fetch players" });
    }
};
exports.getPlayersByTeam = getPlayersByTeam;
const searchPlayers = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name || typeof name !== "string") {
            return res.status(400).json({ error: "Search query is required" });
        }
        const players = await prisma.player.findMany({
            where: {
                OR: [
                    { firstName: { contains: name, mode: "insensitive" } },
                    { lastName: { contains: name, mode: "insensitive" } },
                ],
            },
            include: { team: true },
        });
        res.status(200).json(players);
        return;
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to search players" });
    }
};
exports.searchPlayers = searchPlayers;
const createPlayer = async (req, res) => {
    try {
        const { firstName, lastName, jerseyNumber, position, dateOfBirth, nationality, salary, teamId, } = req.body;
        const team = await prisma.team.findMany({
            where: { id: Number(teamId) },
        });
        if (!team) {
            return res.status(404).json({ error: "Team not found" });
        }
        const newPlayer = await prisma.player.create({
            data: {
                firstName,
                lastName,
                jerseyNumber: Number(jerseyNumber),
                position,
                dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
                nationality,
                salary: Number(salary),
                teamId: Number(teamId),
            },
            include: { team: true },
        });
        res.status(201).json(newPlayer);
        return;
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to create player" });
    }
};
exports.createPlayer = createPlayer;
const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await prisma.player.findUnique({
            where: { id: Number(id) },
        });
        if (!player) {
            return res.status(404).json({ error: "Player not found" });
        }
        await prisma.player.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Player deleted successfully" });
        return;
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to delete player" });
    }
};
exports.deletePlayer = deletePlayer;
const transferPlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const { newTeamId } = req.body;
        const player = await prisma.player.findUnique({
            where: { id: Number(id) },
        });
        if (!player) {
            return res.status(404).json({ error: "Player not found" });
        }
        const team = await prisma.team.findUnique({
            where: { id: Number(newTeamId) },
        });
        if (!team) {
            return res.status(404).json({ error: "Destination team not found" });
        }
        const updatedPlayer = await prisma.player.update({
            where: { id: Number(id) },
            data: { teamId: Number(newTeamId) },
            include: { team: true },
        });
        res.json(updatedPlayer);
        return;
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to transfer player" });
    }
};
exports.transferPlayer = transferPlayer;
const updatePlayerSalary = async (req, res) => {
    try {
        const { id } = req.params;
        const { salary } = req.body;
        if (!salary || isNaN(Number(salary))) {
            return res.status(400).json({ error: "Valid salary amount is required" });
        }
        const updatedPlayer = await prisma.player.update({
            where: { id: Number(id) },
            data: { salary: Number(salary) },
            include: { team: true },
        });
        res.json(updatedPlayer);
        return;
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to update player salary" });
    }
};
exports.updatePlayerSalary = updatePlayerSalary;
//# sourceMappingURL=playerController.js.map