import { Router } from 'express';
import { authController } from './controllers/authController';
import { projectController } from './controllers/projectController';

const router = Router();

// Auth-Routen
router.post('/login', authController.login);

// Projekt-Routen
router.get('/projects', projectController.getProjects);
router.post('/projects', projectController.createProject);

export default router;
