import { Resend } from 'resend';
import config from './index.js';

const transporter = new Resend(config.EMAIL_SECRET);

export {
    transporter
}