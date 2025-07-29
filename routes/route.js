import { Router } from "express";
import ApiController from '../controllers/api.js'

const router = new Router()

router.post('/api/send',ApiController.sendEmail)

export default router