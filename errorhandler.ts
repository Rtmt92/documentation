import { Request, Response, NextFunction } from "express";

export class WeatherError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "WeatherError";
    }
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err.stack);
    if (err instanceof WeatherError) {
        res.status(500).json({ error: err.message });
    } else {
        res.status(500).json({ error: "An error occurred" });
    }
}