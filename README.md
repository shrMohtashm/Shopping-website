# Product Showcase App
This repository is for a responsive e-commerce web application showcasing products, featuring filtering, categorization, and a shopping cart system. It allows users to browse, search, and manage products, and includes a checkout process with form validation. The app is built with React, Redux, and other modern libraries for a smooth, mobile-responsive user experience.

## <img width="25" height="25" src="https://img.icons8.com/ios/50/61dafb/overview-pages-2.png" alt="overview-pages-2"/> Overview
This project is designed to create a product showcase for an online store. The main page consists of several key sections, including:
- A banner slider for product introductions.
- A product list with filtering and categorization options.
- A discount festival section.
- A footer section at the bottom of the page.


The application supports adding products to the shopping cart, completing purchases, and consists of the following core pages:
- **Home Page**
- **Shopping Cart Page**
- **Checkout Page**


## <img width="25" height="25" src="https://img.icons8.com/ios/50/61dafb/file-preview.png" alt="file-preview"/> Live Demo
Check out the live demo of the website [here](https://shrmohtashm.github.io/Shopping-website/).


## <img width="25" height="25" src="https://img.icons8.com/ios/50/61dafb/features-list.png" alt="features-list"/> Features
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

## <img width="25" height="25" src="https://img.icons8.com/ios/50/61dafb/motherboard.png" alt="motherboard"/> Technologies Used
- **React.js**
- **Redux**
- **React Hook Form**
- **Yup**
- **Reactstrap**
- **React Select**

## <img width="25" height="25" src="https://img.icons8.com/ios/50/61dafb/maintenance--v1.png" alt="maintenance--v1"/> Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/shrMohtashm/Shopping-website.git
   cd Shopping-website
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

## <img width="25" height="25" src="https://img.icons8.com/ios/50/61dafb/test-results.png" alt="test-results"/> Testing
To run tests:
```sh
npm test
```


