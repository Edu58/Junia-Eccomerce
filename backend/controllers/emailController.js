const nodemailer = require('nodemailer')


const sendWelcomeMail = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })

    try {
        let message = await transporter.sendMail({
            from: `"Junia Market" testing-nodemailer@ethereal.email`,
            to: "yagape7656@laluxy.com",
            subject: "Welcome to Junia",
            html: `
            <div style="text-align: center;">
            <img  src="cid:testing-nodemailer@ethereal.email" />
            </div>
            <p style="font-size: 1.1rem;">
                Hey there!
                <br/>
                <br/>
                We’re sending this email to confirm that your account at Junia was created successfully.
                <br/>
                We are more than happy to have you on board. Please make yourself at home and enjoy shopping with us.
                <br/>
                Click this button to log in to your account and start shopping:
                <br/>
                <button style="text-align:center; background-color:orange; color:white; border:none; padding:.5rem 2rem; margin: 1rem;">
                <a href="https://junia.com/login" style="text-decoration: none; text-align: center; color: white; font-size: 1.1rem; font-weight: bold;">Log in</a>
                </button>
                <br/>
                It’s great that you are now a part of the Junia family!.
                <br/>
                <br/>
                Cheers,
                <br/>
                Junia’s Customer Service Team
            </p>
            `,
            attachments: [
                {
                    filename: 'welcome.png',
                    path: __dirname + '/../public/images/welcome.png',
                    cid: 'testing-nodemailer@ethereal.email'
                }
            ]
        })

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));

        return res.status(200).json({ message: `Email sent successfully` })

    } catch (error) {
        return res.status(400).json({ message: 'Email could not be sent! Try again' })
    }


}

module.exports = sendWelcomeMail