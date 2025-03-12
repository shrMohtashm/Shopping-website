# 🛍️ Product Showcase App

## 📌 Overview
This project is designed to create a product showcase for an online store. The main page consists of several key sections, including:
- A banner slider for product introductions.
- A product list with filtering and categorization options.
- A discount festival section.
- A footer section at the bottom of the page.

## 🌟 Live Demo
Check out the live demo of the website [here](https://shrmohtashm.github.io/Shopping-website/).

The application supports adding products to the shopping cart, completing purchases, and consists of the following core pages:
- **🏠 Home Page**
- **🛍️ Shopping Cart Page**
- **✅ Checkout Page**

## 🚀 Features
-  **Product Data Fetching:** Fetch product lists and categories from `https://fakestoreapi.com/`.
-  **Project Architecture:** Follows a well-structured architecture and folder organization.
-  **Styling Libraries:** Uses `reactstrap` styling libraries.
-  **Dropdown Handling:** Implements dropdowns using `react-select`.
-  **Global State Management:** Uses `Redux` for centralized state management.
-  **Persistent Shopping Cart:** The shopping cart retains its items even after a page refresh.
-  **Form Handling:** Forms are managed using `react-hook-form`.
-  **Form Validation:** Implements proper validation using `yup`.
-  **404 Page:** Users are redirected to a custom 404 page if they enter an invalid URL.
-  **Search & Pagination:** The product list supports search by category and name, and pagination is implemented.
-  **Mobile Responsiveness:** The design is fully responsive and works seamlessly on mobile devices.
-  **Shopping Cart Functionalities:**
  - Displays selected products.
  - Allows removal of items.
  - Supports increasing and decreasing item quantities.
- **Checkout Page Features:**
  - A dropdown list for selecting cities.
  - Proper form validation before submission.
  - Displays a success message upon successful validation.
- **Cart Icon in Header:** The cart icon dynamically displays the number of items in the cart.
- **Unit Testing:** The project includes test cases for some components.

## 🛠️ Technologies Used
- **React.js**
- **Redux**
- **React Hook Form**
- **Yup**
- **Reactstrap**
- **React Select**

## ⚙️ Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/shrMohtashm/Shopping-website.git
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Testing
To run tests:
```sh
npm test
```


