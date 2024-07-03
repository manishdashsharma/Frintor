### API Endpoints

Base URL (local): `http://localhost:5000`

#### Health Check

- **Endpoint:** `/`
  - **Method:** GET
  - **Description:** Performs a server health check.
  - **Example using curl:**
    ```bash
    curl http://localhost:5000/
    ```

- **Endpoint:** `/api/v1/healthcheckup`
  - **Method:** GET
  - **Description:** Performs an API server health check.
  - **Example using curl:**
    ```bash
    curl http://localhost:5000/api/v1/healthcheckup
    ```

#### Authentication

- **Endpoint:** `/api/v1/auth/signup`
  - **Method:** POST
  - **Description:** Registers a new user.
  - **Example using curl:**
    ```bash
    curl -X POST http://localhost:5000/api/v1/auth/signup \
    -H "Content-Type: application/json" \
    -d '{
      "name": "User",
      "email": "user@example.com",
      "password": "examplePassword",
      "phoneNumber": "1122882821",
      "username": "exampleuser"
    }'
    ```

- **Endpoint:** `/api/v1/auth/login`
  - **Method:** POST
  - **Description:** Logs in a user and generates access tokens.
  - **Example using curl:**
    ```bash
    curl -X POST http://localhost:5000/api/v1/auth/login \
    -H "Content-Type: application/json" \
    -d '{
      "username": "manish",
      "password": "q1e2r3s5"
    }'
    ```

- **Endpoint:** `/api/v1/auth/profile`
  - **Method:** GET
  - **Description:** Retrieves user profile information.
  - **Example using curl (requires authorization token):**
    ```bash
    curl http://localhost:5000/api/v1/auth/profile \
    -H "Authorization: Bearer <access_token>"
    ```

- **Endpoint:** `/api/v1/auth/logout`
  - **Method:** GET
  - **Description:** Logs out a user (requires authorization token).
  - **Example using curl (requires authorization token):**
    ```bash
    curl http://localhost:5000/api/v1/auth/logout \
    -H "Authorization: Bearer <access_token>"
    ```

- **Endpoint:** `/api/v1/auth/change-password`
  - **Method:** POST
  - **Description:** Changes user password (requires authorization token).
  - **Example using curl (requires authorization token):**
    ```bash
    curl -X POST http://localhost:5000/api/v1/auth/change-password \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <access_token>" \
    -d '{
      "oldPassword": "q1e2r3s4",
      "newPassword": "q1e2r3s5"
    }'
    ```

- **Endpoint:** `/api/v1/auth/forgot-password`
  - **Method:** POST
  - **Description:** Initiates forgot password process by email.
  - **Example using curl:**
    ```bash
    curl -X POST http://localhost:5000/api/v1/auth/forgot-password \
    -H "Content-Type: application/json" \
    -d '{
      "email": "manish@dowellresearch.in"
    }'
    ```

- **Endpoint:** `/api/v1/auth/reset-password/<reset_token>`
  - **Method:** POST
  - **Description:** Resets user password using reset token.
  - **Example using curl:**
    ```bash
    curl -X POST http://localhost:5000/api/v1/auth/reset-password/<reset_token> \
    -H "Content-Type: application/json" \
    -d '{
      "password": "q1e2r3s5",
      "newPassword": "q1e2r3s5"
    }'
    ```

Replace `<access_token>` and `<reset_token>` placeholders with actual tokens received from previous operations where applicable. Adjust `http://localhost:5000` with your actual base URL if it's different.

## API Reference
Click Here -> [API Documentation](https://documenter.getpostman.com/view/26372308/2sA3dxCrCh)