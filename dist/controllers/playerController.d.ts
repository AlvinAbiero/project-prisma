import { Request, Response } from "express";
export declare const getAllPlayers: (_req: Request, res: Response) => Promise<void>;
export declare const getPlayerById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getPlayersByTeam: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const searchPlayers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createPlayer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deletePlayer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const transferPlayer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePlayerSalary: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
