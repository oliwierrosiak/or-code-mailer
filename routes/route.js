import { Router } from "express";
import ApiController from '../controllers/api.js'

const router = new Router()

router.get('/serverStart',(req,res)=>{
    res.sendStatus(200)
})

router.post('/api/send',ApiController.sendEmail)

export default router