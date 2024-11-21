Moringa Lost & Found

Description
The Moringa Lost & Found application is a platform where users can report lost and found items. It helps users track lost items, report found items, and manage claims for recovered items. This project uses a Flask API for the backend and React for the frontend.

Admins can manage inventory, approve reports, and track rewards, while users can report lost items, claim found items, and view their reward history.

Features:
Admin Role:
Approve lost item reports.
Add, update, and remove items in the inventory.
View and manage rewards.
User Role:
Report lost items and found items.
Claim found items and track rewards.
View and interact with their own reward payments.


Technologies
Backend: Python (Flask)
Frontend: React (for testing the Flask API)
Database: PostgreSQL
Wireframes: Figma (Mobile-friendly design)

Setup
Before starting, ensure you are in the project directory. If you're using a code editor, navigate to the project folder.

Step 1: Install Backend Dependencies
Navigate to the backend directory and install the necessary Python dependencies:

pipenv install
pipenv shell

Step 2: Install Frontend Dependencies
npm install

Running the Application
You can run both the Flask API and React app locally using the following commands:

Backend (Flask API):
Run the Flask API on localhost:
python app.py

This will start the Flask server on localhost:5000.

Frontend (React App):
npm start
This will run the React app on localhost:3000.

Database Setup
Step 1: Create Initial Database
Before you begin, set up the initial database by running these commands:
export FLASK_APP=server/app.py
flask db init
flask db upgrade head


Step 2: Define Model Relationships
In the file models.py, define the relationships for the Lost & Found system. For example, an Item can be reported by many users, and a user can claim multiple items.

Run the migrations and seed the database:
flask db migrate -m "Initial migration."
flask db upgrade head
python server/seed.py

API Endpoints
The Moringa Lost & Found API provides various endpoints to manage lost and found items, rewards, and user accounts.

Lost & Found API
Lost Items
Create Lost Item

Endpoint: POST /lost-items
Request Body
{
  "description": "Lost phone",
  "user_id": 1
}

Response:
{
  "id": 1,
  "description": "Lost phone",
  "user_id": 1,
  "status": "pending"
}
Get All Lost Items

Endpoint: GET /lost-items
Response:
[
  {
    "id": 1,
    "description": "Lost phone",
    "status": "pending"
  }
]
Found Items
Create Found Item

Endpoint: POST /found-items
Request Body:
{
  "description": "Found wallet",
  "user_id": 2
}
Response:
{
  "id": 1,
  "description": "Found wallet",
  "user_id": 2,
  "status": "available"
}
Get All Found Items

Endpoint: GET /found-items
Response:
[
  {
    "id": 1,
    "description": "Found wallet",
    "status": "available"
  }
]
Claim Items
Claim a Found Item
Endpoint: POST /claim
Request Body:
{
  "found_item_id": 1,
  "user_id": 3
}
Response:
{
  "message": "Claim successful"
}

Rewards
Give Reward

Endpoint: POST /rewards
Request Body:
{
  "user_id": 3,
  "found_item_id": 1,
  "amount": 50
}
Response:
{
  "message": "Reward paid"
}
Get Rewards for User

Endpoint: GET /rewards/<user_id>
Response:
[
  {
    "user_id": 3,
    "found_item_id": 1,
    "amount": 50
  }
]
Validations
Ensure the following validations for input fields:

Description:
Required, non-empty string, maximum length of 255 characters.
Reward Amount:
Positive number, non-zero.

Testing the API
You can test the API using the following methods:

Using Postman
Import the Moringa Lost & Found.postman_collection.json file into Postman to test each API route. This will allow you to test each endpoint's functionality.

Running Tests with Pytest
Run the following command in your terminal to execute the tests:

pytest 

This will run all the tests and stop at the first failure, providing feedback on your API functionality.
License
This project is licensed under the MIT License.