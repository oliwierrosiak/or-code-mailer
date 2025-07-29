import express from 'express'
import router from './routes/route.js'
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3000,'0.0.0.0',()=>{
    console.log("Serwer słucha na porcie 3000...")
})