import OpenAIController from '../controllers/OpenAIController';
import express from 'express';

// Get the express router instance.
const router = express.Router();

router.post('/chat', OpenAIController.chat);

export default router;
