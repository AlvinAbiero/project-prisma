import { Request, Response } from "express";
export declare const getAllTeams: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getTeamById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createTeam: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateTeamShirtColor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteTeam: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
