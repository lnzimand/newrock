const sendmail = require('sendmail')();

function sendMail(options) {
    return new Promise((resolve, reject) =>
        sendmail({
            from: options.from,
            to: options.to,
            subject: options.subject,
            html: options.message,
        }, (error, reply) => {
            if (error){
                reject (error && error.stack)
            }
            resolve(reply)
        }))
}

export { sendMail }