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
User Profile

3. Get Profile
Endpoint: /auth/profile
Method: GET

Headers:
{
    "Authorization": "Bearer your_jwt_token_here"
}
Response:

Success (200):
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "jenis_kelamin": "Male",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
}
Error (401):
{
    "message": "Access Denied"
}
Products
3. Get All Products
Endpoint: /products
Method: GET
Headers:

{
    "Authorization": "Bearer your_jwt_token_here"
}
Response:
Success (200):
[
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for product 1",
        "price": 100,
        "userId": 1,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for product 2",
        "price": 200,
        "userId": 1,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
    }
]
Error (401):
{
    "message": "Access Denied"
}

4. Add a New Product

Endpoint: /products
Method: POST
Headers:
{
    "Authorization": "Bearer your_jwt_token_here"
}
Request Body:
{
    "name": "New Product",
    "description": "Description for new product",
    "price": 150
}
Response:
Success (201):
{
    "id": 3,
    "name": "New Product",
    "description": "Description for new product",
    "price": 150,
    "userId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
}
Error (401):
json
Copy code
{
    "message": "Access Denied"
}
6. Update a Product
Endpoint: /products/:id
Method: PUT
Headers:
{
    "Authorization": "Bearer your_jwt_token_here"
}
Request Body:
{
    "name": "Updated Product",
    "description": "Updated description for product",
    "price": 175
}
Response:
Success (200):
{
    "id": 1,
    "name": "Updated Product",
    "description": "Updated description for product",
    "price": 175,
    "userId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
}
Error (401):
{
    "message": "Access Denied"
}
Error (404):
{
    "message": "Product not found"
}

7. Delete a Product
Endpoint: /products/:id
Method: DELETE
Headers:
{
    "Authorization": "Bearer your_jwt_token_here"
}
Response: 
Success (200):
{
    "message": "Product deleted successfully"
}
Error (401):
{
    "message": "Access Denied"
}
Error (404):
{
    "message": "Product not found"
}

Errors
All error responses follow the same structure:

{
    "message": "Error message here"
}
