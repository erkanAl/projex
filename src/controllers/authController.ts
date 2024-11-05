import { Request, Response } from 'express';

export const authController = {
    login: (req: Request, res: Response) => {
        // Authentifizierungslogik hier
        const { username, role } = req.body;
        // Hier könntest du die Authentifizierung durchführen
        res.json({ message: `Willkommen, ${username}!`, role });
    }
};
