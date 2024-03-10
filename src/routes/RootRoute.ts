import RootController from '../controllers/RootController';
import express from 'express';

// Get the express router instance.
const router = express.Router();

router.get('/', RootController.home);

export default router;
