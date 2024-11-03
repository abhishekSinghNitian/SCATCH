# SCATCH
This project is a full-stack eCommerce website dedicated to selling premium bags. It is built with the MERN stack (MongoDB, Express.js, React, Node.js) and uses EJS for server-side rendering.
#Table of Contents
    Features
    Tech Stack
    Installation
    Usage
    Project Structure
    Screenshots
    Contributing
    License

    #Features

    User Authentication and Authorization (Register/Login)
    Bag catalog with categories, detailed product views, and search functionality
    Cart management with quantity adjustment
    Order management system
    Admin panel for managing products, orders, and users
    Responsive design for mobile and desktop views
    Flash messages for user interactions and alerts

    #Tech Stack

    Frontend: HTML, CSS, JavaScript, EJS
    Backend: Node.js, Express.js
    Database: MongoDB
    Libraries: Mongoose, Passport.js (for authentication), bcrypt.js (for hashing passwords)
    Other: Tailwind CSS for styling

    #Installation

    Clone the repository:
      git clone https://github.com/your-username/bag-shop-ecommerce.git
      cd bag-shop-ecommerce

    Install the dependencies:
      npm install

    Set up environment variables:

      Create a .env file in the root directory.

      Add the following variables with your own values:
          PORT=3000
          MONGODB_URI=your_mongodb_uri
          SESSION_SECRET=your_secret_key

      Run the application:
        npm start
        Visit http://localhost:3000 to view the app.

Usage

    User Features: Users can browse products, add items to their cart, place orders, and view their order history.
    Admin Features: The admin can add new products, manage existing products, handle orders, and view user details.

#Project Structure

bag-shop-ecommerce/
├── public/               # Static files (CSS, JS, images)
├── routes/               # Application routes (user, admin, product)
├── models/               # Database models (User, Product, Order)
├── views/                # EJS templates for different pages
├── controllers/          # Application controllers (business logic)
├── config/               # Configuration files (database, passport)
├── .env                  # Environment variables
├── app.js                # Main server file
└── package.json
