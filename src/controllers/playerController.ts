import {Request, Response} from 'express'
import {PrismaClient} from '../generated/prisma/client'

const prisma = new PrismaClient();

export const getAllPlayers = async (_req: Request, res: Response) => {
  try {
    const players = await prisma.player.findMany({
      include: { team: true }
    });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch players' });
  }
};


export const getPlayerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const player = await prisma.player.findUnique({
      where: { id: Number(id) },
      include: { team: true }
    });
    
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch player' });
  }
};

export const getPlayersByTeam = async (req: Request, res: Response) => {
    try {
        const {teamId} = req.params;

        // check if team exists
        const team = await prisma.team.findUnique({
            where: {id: Number(teamId)}
        });

        if (!team) {
            return res.status(404).json({error: 'Team not found'})
        }

        const players = await prisma.player.findMany({
            where: {teamId: Number(teamId)},
            include: {team: true}
        })

        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch players'})
    }
}

export const searchPlayers = async (req: Request, res: Response) => {
    try {
        const {name} = req.query;

        if (!name || typeof name !== 'string') {
            return res.status(400).json({error: 'Search query is required'})
        }

        const players = await prisma.player.findMany({
            where: {
                OR: [
                    {firstName: {contains: name, mode: 'insensitive'}},
                    {lastName: {contains: name, mode: 'insensitive'}}
                ]
            },
            include: {team: true}
        })

        res.status(200).json(players)
    } catch (error) {
        res.status(500).json({error: 'Failed to search players'})
    }
}

export const createPlayer = async (req: Request, res: Response) => {
    try {
        const {firstName, lastName, jerseyNumber, position, 
      dateOfBirth, nationality, salary, teamId } = req.body;

    //   Check if teams exists
    const team = await prisma.team.findMany({
        where: {id: Number(teamId)}
    })

    if (!team) {
        return res.status(404).json({error: 'Team not found'})
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
        teamId: Number(teamId)
        },
        include: {team: true}
    });

    res.status(201).json(newPlayer)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create player' });
    }
}


export const deletePlayer = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        // Check if player exists
        const player = await prisma.player.findUnique({
            where: {id: Number(id)}
        })

        if (!player) {
            return res.status(404).json({error: 'Player not found'})
        }

        await prisma.player.delete({
            where: {id: Number(id)}
        })

        res.json({message: 'Player deleted successfully'})
    } catch (error) {
        res.status(500).json({error: 'Failed to delete player'})
    }
}

export const transferPlayer = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {newTeamId} = req.body;

        // check if player exists
        const player = await prisma.player.findUnique({
            where: {id: Number(id)}
        })

        if (!player) {
            return res.status(404).json({error: 'Player not found'})
        }

        // check if destination team exists
        const team = await prisma.team.findUnique({
            where: {id: Number(newTeamId)}
        })

         if (!team) {
            return res.status(404).json({ error: 'Destination team not found' });
        }

        const updatedPlayer = await prisma.player.update({
            where: {id: Number(id)},
            data: {teamId: Number(newTeamId)},
            include: {team: true}
        })

        res.json(updatedPlayer)
    } catch (error) {
        res.status(500).json({ error: 'Failed to transfer player' });
    }
}

export const updatePlayerSalary = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {salary} = req.body;

        if (!salary || isNaN(Number(salary))) {
            return res.status(400).json({error: 'Valid salary amount is required'})
        }

        const updatedPlayer = await prisma.player.update({
            where: {id: Number(id)},
            data: {salary: Number(salary)},
            include: {team: true}
        })

        res.json(updatedPlayer)
    } catch (error) {
         res.status(500).json({ error: 'Failed to update player salary' });
    }
}

