
# Customer Feedback System

## Overview

A **Customer Feedback System** built with **React** and **Node.js**, designed for collecting and managing user feedback for products. It integrates with the **Fake Store API** to dynamically display product data, allowing users to submit feedback on each product they interact with.

## Features

- **Product List**: Displays a list of products fetched from the Fake Store API.
- **Feedback Form**: Allows users to submit feedback (ratings and comments) for each product.
- **Product Feedback**: Displays submitted feedback for each product.
- **Search and Filter**: Implemented search functionality to find products by name or category.

  
## Tech Stack

- **Frontend**: 
  - **React.js** – For the user interface.
  - **CSS** – For styling.
  - **Axios** – For making API requests to the backend.
  
- **Backend**:
  - **Node.js** – For handling the server-side logic.
  - **Express.js** – For routing and handling requests.
  
## Setup Instructions

### Prerequisites

- **Node.js** and **npm** installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AmaedaQ/Customer_Feedback_system.git
   cd Customer_Feedback_system
   ```

2. Install dependencies for the frontend and backend:

   **Frontend**:
   ```bash
   cd client
   npm install
   ```

   **Backend**:
   ```bash
   cd server
   npm install
   ```

3. Start both servers:

   - Start the backend:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

4. Access the app at `http://localhost:3000` and the backend server at `http://localhost:5000`.

## How to Use

1. **View Products**: Browse through a list of products.
2. **Submit Feedback**: Leave feedback (ratings and comments) for each product.
3. **View Feedback**: See feedback submitted by other users for each product.

## Future Enhancements

- **User Authentication**: Enable users to log in and track their feedback.
- **Feedback Analytics**: Visualize feedback trends over time.


## Acknowledgements

- **Fake Store API** – Provides the product data.
- **React Documentation** – For building React apps.
```
