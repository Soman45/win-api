��#   w i n - a p i 
 Base URL http://localhost:5000/api
1. Login
Endpoint: /auth/login
Method: POST
Request Body:
{
    "email": "user@example.com",
    "password": "password123"
}
Response:Success (200):
{
    "token": "your_jwt_token_here"
}
Error (401):
{
    "message": "Invalid credentials"
}
 
