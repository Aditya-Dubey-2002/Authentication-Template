# Authentication Template

This is a simple authentication template built using React.js for the frontend and Node.js/Express for the backend. It allows users to sign up and sign in with basic authentication features.

## Features

- **Sign Up**: Users can register with their name, email, and password.
- **Sign In**: Users can log in using their registered email and password.
- **Navigation**: Successful login redirects to the dashboard page.
- **API Integration**: The authentication flows interact with a backend API (`/api/auth/login` and `/api/auth/register`).

## Tech Stack

- **Frontend**:
  - React.js
  - React Router (for navigation)
  - Tailwind CSS (for styling)
  - Fetch API (for making HTTP requests)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for storing user data)

## Installation

### Frontend (React)

1. Clone this repository:

   ```bash
   git clone https://github.com/your-repository/auth-template.git
   ```
2. Navigate to the frontend directory:

```bash
cd auth-template/frontend
```
3. Install dependencies:

```bash
npm install
```
4. Start the development server:

```bash
npm start
```
Your React app will be running on http://localhost:3000.

### Backend (Node.js/Express)

1. Navigate to the backend directory:

```bash
cd auth-template/backend
```

2. Install dependencies:

``` bash
npm install
```

3. Create a .env file in the backend directory to configure the server settings:

```bash
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

4. Start the server:

```bash
npm start

```
Your backend API will be running on http://localhost:5000.

## API Endpoints

### POST /api/auth/register
Description: Registers a new user with their name, email, and password.

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
Response:

```
Success: {"message": "User registered successfully!"}
Failure: {"message": "Email already in use or invalid data!"}

```
### POST /api/auth/login

Description: Logs in an existing user with their email and password.

Request Body:

```
json
{
  "email": "john@example.com",
  "password": "password123"
}
```
Response:
```
Success: {"message": "Login successful!", "token": "<jwt-token>"}
Failure: {"message": "Invalid credentials!"}
```
## Folder Structure
```bash
/auth-template
  /frontend
    /src
      /components
        - SignIn.js
        - SignUp.js
      /utils
        - api.js
      - App.js
  /backend
    /controllers
      - authController.js
    /models
      - User.js
    /routes
      - authRoutes.js
    - server.js
```
## Contributing
If you would like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Note: Make sure to replace your-repository with your actual GitHub repository name and fill in your MongoDB URI and JWT secret in the .env file for the backend configuration.
