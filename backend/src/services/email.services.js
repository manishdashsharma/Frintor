import { transporter } from "../config/transporter.config.js";
import config from "../config/index.js";

const sendMailService = async (option) => {
    try {
        const response = await transporter.emails.send({
            from: config.FROM_EMAIL,
            to: option.to,
            subject: option.subject,
            html: option.html
        });

        if (response.status === 200) {
            console.log('Email sent successfully');
            return { success: true, message: 'Email sent successfully' };
        } else {
            console.error('Failed to send email: ', response);
            return { success: false, message: 'Failed to send email' };
        }
    } catch (error) {
        console.error('Failed to send email: ', error);
        return { success: false, message: 'Failed to send email' };
    }
};

export { sendMailService };
