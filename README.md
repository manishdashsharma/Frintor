# Frintor

## Backend (v1.0.0)

### Technologies Used

- Node.js / Express.js
- JWT (JSON Web Token) for access token and refresh token management
- Crypto for encrypted password storage
- MongoDB for database storage
- Render for email services (Note: Email sending functionality is not enabled in this example.)

### Environment Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/manishdashsharma/Frintor.git
   cd Frintor
   ```

2. **Create `.env` File:**
   Create a file named `.env` in the backend folder of your project with the following contents. Do not expose this file to public repositories or environments:
   ```
   PORT=5000
   REFRESH_TOKEN_SECRET=<YOUR_REFRESH_TOKEN_SECRET>
   REFRESH_TOKEN_EXPIRY=10d
   MONGO_DB_URI=<YOUR_MONGO_DB_URI>
   JWT_EXPIRY=7d
   JWT_SECRET=<YOUR_JWT_SECRET>
   EMAIL_SECRET=<YOUR_EMAIL_SECRET>
   FROM_EMAIL=<YOUR_FROM_EMAIL>
   ```

   Adjust the values according to your environment and sensitive information like database credentials.

3. **Run with Docker Compose:**

   Ensure you have Docker installed and then run:
   ```bash
   docker-compose up
   ```

   This command will build and start your Docker containers defined in `docker-compose.yml`.

### Running Without Docker

If you prefer to run the project without Docker:

1. Navigate to the backend directory:
   ```bash
   cd frintor/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   This will start the backend server in development mode.

### Important Note

- **Security:** Do not expose or share your `.env` file publicly. Keep it confidential and ensure it is not included in your source control repositories. This file contains sensitive information such as database credentials and secret keys.

### Shutting Down

To stop and remove containers, networks, and volumes created by Docker Compose, run:
```bash
docker-compose down
```