import { Resend } from "resend"
import dotenv from 'dotenv'
dotenv.config()

const apiKey = new Resend(process.env.RESEND_KEY)

class ApiController
{
    async sendEmail(req,res)
    {
        try
        {
            apiKey.emails.send({
                from: 'onboarding@resend.dev',
                to: 'oliwierrosiak07@gmail.com',
                subject: 'Nowa Wiadomość',
                html: `<b>Nowa wiadomość od ${req.body.email}</b><br><p>${req.body.message}</p>`
            });
            res.sendStatus(200)
        }
        catch(ex)
        {
            res.sendStatus(503)
        }
        
    }
}

export default new ApiController