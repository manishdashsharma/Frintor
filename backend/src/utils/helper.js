const AuthRoles = {
    ADMIN : "ADMIN",
    MODERATOR : "MODERATOR",
    USER : "USER"
}
const getResetPasswordEmailContent = (resetUrl) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reset Password</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    margin: 40px auto;
                }
                .container h2 {
                    color: #333;
                    text-align: center;
                }
                .container p {
                    font-size: 16px;
                    line-height: 1.5;
                    color: #666;
                }
                .container a {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    text-align: center;
                    margin: 20px 0;
                }
                .container a:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Reset Your Password</h2>
                <p>Hello,</p>
                <p>We received a request to reset your password. Click the button below to reset your password:</p>
                <a href="${resetUrl}" target="_blank">Reset Password</a>
                <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
                <p>Thank you,<br>Your Company Name</p>
            </div>
        </body>
        </html>
    `;
};


export { 
    AuthRoles,
    getResetPasswordEmailContent
}