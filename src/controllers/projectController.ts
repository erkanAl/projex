import { Request, Response } from 'express';

export const projectController = {
    getProjects: (req: Request, res: Response) => {
        // Beispielhafte Projekt-Daten
        const projects = [
            { title: "Projekt 1", description: "Beschreibung von Projekt 1" },
            { title: "Projekt 2", description: "Beschreibung von Projekt 2" }
        ];
        res.json(projects);
    },
    createProject: (req: Request, res: Response) => {
        const { title, description } = req.body;
        // Logik zum Erstellen eines neuen Projekts
        res.json({ message: "Projekt erstellt!", project: { title, description } });
    }
};
