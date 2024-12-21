# Ichiba Online Store Project

Welcome to **Ichiba**, a dynamic e-commerce platform built with React and TailwindCSS. This project demonstrates modular design, state management using Context API, and responsive user interfaces, making it scalable and developer-friendly.

---

## Features

### Core Features
- **Homepage**: Displays featured products in a responsive grid layout.
- **Product Details**: Provides detailed information about products with modals for an enhanced user experience.
- **Shopping Cart**: Allows users to add, remove, and manage items in their cart.
- **Wishlist**: Enables users to save items for later viewing.
- **Search Functionality**: Offers real-time search for products.
- **Checkout Process**: Facilitates a seamless shopping experience.

### Admin Panel
- Manage products and orders through a dedicated admin dashboard.
- Features for adding, updating, and deleting products.

### Additional Features
- **Multi-language Support**: Switch between languages dynamically.
- **Filter and Sort**: Narrow down products by categories and sort them by price or popularity.
- **Responsive Design**: Fully optimized for desktop and mobile views.
- **Notifications**: Real-time feedback for actions like adding items to the cart or wishlist.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── Header.jsx            // Navigation bar.
│   ├── Footer.jsx            // Footer section.
│   ├── ProductCard.jsx       // Individual product cards.
│   ├── SearchBar.jsx         // Search functionality.
│   ├── Wishlist.jsx          // Wishlist management.
│   ├── FilterBar.jsx         // Filtering options for products.
│   ├── Modal.jsx             // Reusable modal for popups.
│   ├── Spinner.jsx           // Loading spinner.
│   └── AdminPanel/
│       ├── AdminDashboard.jsx // Admin overview.
│       ├── ProductManager.jsx // Manage products.
│       └── OrderManager.jsx   // Manage orders.
├── pages/
│   ├── Home.jsx              // Main homepage.
│   ├── ProductDetails.jsx    // Detailed product information.
│   ├── Login.jsx             // User login.
│   ├── Signup.jsx            // User registration.
│   ├── Profile.jsx           // User profile management.
│   ├── Cart.jsx              // Shopping cart view.
│   ├── Checkout.jsx          // Checkout process.
│   ├── WishlistPage.jsx      // Dedicated wishlist page.
│   ├── Admin.jsx             // Admin entry point.
│   ├── Reviews.jsx           // Product reviews.
│   ├── About.jsx             // About the store.
│   ├── Contact.jsx           // Contact form.
│   └── OrderHistory.jsx      // User order history.
├── context/
│   ├── AuthContext.jsx       // Manages user authentication.
│   ├── CartContext.jsx       // Handles shopping cart state.
│   ├── WishlistContext.jsx   // Manages wishlist state.
│   ├── NotificationContext.jsx // Handles notifications.
│   └── MultiLanguageContext.jsx // Multi-language support.
├── App.jsx                   // Main application file.
├── index.jsx                 // Entry point.
├── styles/
│   └── tailwind.css          // TailwindCSS styling.
```

---

## Installation

### Prerequisites
- Node.js (>=16.x)
- npm (>=8.x) or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/sembekov/final_css231.git
   ```
2. Navigate to the project directory:
   ```bash
   cd final_css231
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Usage

### Development
- Modify the components and pages inside the `src/` directory to customize the application.
- Use the `public/` folder for static assets like images and icons.

### Production
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist/` folder to your hosting platform.

---

## Technologies Used

- **React**: Frontend library.
- **Vite**: Development and build tool.
- **TailwindCSS**: Utility-first CSS framework.
- **React Router**: Routing for navigation.
- **Context API**: State management for cart, wishlist, and authentication.
- **Web hosting**: Porkbun.
- **Cloud service**: Yandex Cloud.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

