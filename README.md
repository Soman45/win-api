��#   w i n - a p i 
 Base URL http://localhost:5000/api
1. Login
Endpoint: /auth/login

Method: POST

Request Body:

json
Copy code
{
    "email": "user@example.com",
    "password": "password123"
}
Response:

Success (200):
json
Copy code
{
    "token": "your_jwt_token_here"
}
Error (401):
json
Copy code
{
    "message": "Invalid credentials"
}
 
