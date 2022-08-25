const sgMail = require('@sendgrid/mail')
// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'har5shx@gmail.com',
        subject: 'Sign-in', 
        text:`Welcome to the task manager app, ${name}!`
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'har5shx@gmail.com',
        subject:'Sorry to see you go!',
        text:`Goodbye ${name}, we hope to see you soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}