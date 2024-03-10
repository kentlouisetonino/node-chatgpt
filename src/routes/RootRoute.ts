import express from 'express';
import RootController from '../controllers/RootController';

// Express router instance.
const router = express.Router();

router.get('/', RootController.home);

export default router;
