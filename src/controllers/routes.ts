import express from 'express';
import ytdl from './ytdl';

const router = express.Router();

router.use('/ytdl', ytdl)


export default router;