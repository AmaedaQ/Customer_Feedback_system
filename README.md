# Customer Feedback System

## Overview

The **Customer Feedback System** is a web application designed to collect and manage user feedback for products in a store. Built with **React** on the frontend and **Node.js** on the backend, the system integrates with the **Fake Store API** to dynamically display product information. Users can submit feedback on each product, helping businesses understand customer satisfaction and improve their offerings.

## Features

- **Product Listing**: Display a list of products fetched from the Fake Store API.
- **Feedback Form**: Allow users to submit feedback for each product, including ratings and comments.
- **Backend Support**: Handle feedback submission and store data using **Node.js**.
- **Dynamic Feedback**: Display feedback on each product page, with options for users to view ratings and comments left by other customers.

## Technologies Used

- **Frontend**: 
  - **React** – For building the user interface.
  - **CSS** – For styling the application.
  - **Axios** – For making API requests to the backend.

- **Backend**:
  - **Node.js** – For handling the server-side logic and managing the feedback system.
  - **Express.js** – For routing and handling requests.
  - **Fake Store API** – Used to fetch dynamic product data.

- **Additional Libraries**: 
  - **Body-parser** – For parsing incoming request bodies in the backend.
  - **Cors** – To allow cross-origin requests between the frontend and backend.

## Pages Included

- **index.html**: The main page displaying a list of products and feedback submission form.
- **productPage.html**: A dynamic page for each product that allows users to leave feedback.
- **styles.css**: The main stylesheet used to style the website.
- **app.js**: The entry point for the React frontend application, managing the state and rendering components.

## Setup

### Prerequisites

- **Node.js** and **npm** (Node Package Manager) should be installed.
- **React** and **Express** packages must be installed.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/AmaedaQ/Customer_Feedback_system.git
   cd Customer_Feedback_system



How to Use
View Products: Browse through a list of products fetched from the Fake Store API.

Submit Feedback: Leave feedback for any product by filling out the feedback form.

View Feedback: See all feedback left by previous customers on each product page.



Roadmap
User Authentication: Add user authentication to track feedback submitted by specific users.

Feedback Analytics: Integrate data analytics to analyze feedback trends over time.

Product Search: Implement a search feature to filter products by name or category.




Acknowledgements
Fake Store API – For providing the product data used in the application.

React Documentation – For providing detailed documentation on building React apps.
