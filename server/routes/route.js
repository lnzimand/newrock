import express from 'express'
import { validateEmail, x as empty } from '../helper/validation';
import { sendMail } from '../helper/mail'
const router = express.Router();

router.post('/', (request, response) => {
    var { name, emailAddress, subject, message } = request.body

    console.log(request.body);
    var error = validateEmail(emailAddress);
    if (empty(error)) {
        var options = { from: emailAddress, to: "newrockmedias@gmail.com", subject: subject, message: `${message}<br><br>Sender's name: ${name}` };

        sendMail(options).then((result) => {
            response.send({
                success: "Email sucessfully sent!"
            })
        }).catch(error => {
            response.status(400).send({
                error: "Unable to send email, try again later"
            })
        })
    } else {
        response.status(400).send({
            error: "Please enter a valid email"
        })
    }
})

export { router }
