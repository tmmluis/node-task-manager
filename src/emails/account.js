const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tmmluis@gmail.com',
        subject: 'Welcome to the task node web app',
        text: `Welcome to the app, ${name}. I hope you enjoy using it!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tmmluis@gmail.com',
        subject: 'Your account has been deleted',
        text: `We are sorry to see you leaving, ${name}. You will always be welcome back.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}