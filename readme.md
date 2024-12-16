# Travel Backend

This is the backend for the travel application. It includes authentication for admin users and package management.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ihimanshusharma/travel-backend.git
    cd travel-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the server:
    ```sh
    npm start
    ```

### API Endpoints

#### Authentication

- **POST /api/auth/login**
    - Request Body:
        ```json
        {
            "email": "admin@example.com",
            "password": "yourpassword"
        }
        ```
    - Response:
        ```json
        {
            "message": "Login successful",
            "token": "your_jwt_token"
        }
        ```

#### Packages

- **GET /packages**
    - Retrieves all packages.

- **POST /packages**
    - Adds a new package.
    - Request Body:
        ```json
        {
            "id": "1",
            "title": "Package Title",
            "price": 1000,
            "duration": "7 days",
            "description": "Package Description",
            "nextAvailableDate": "2023-01-01",
            "images": ["image1.jpg", "image2.jpg"],
            "highlights": ["Highlight 1", "Highlight 2"],
            "itinerary": "Day 1: ... Day 2: ..."
        }
        ```

## Project Structure
