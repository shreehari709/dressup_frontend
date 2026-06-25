# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🌸 Phool Si Pyari - MERN E-Commerce Platform

## 📖 Overview

**Phool Si Pyari** is a full-stack MERN E-Commerce platform built for selling women's fashion products online. The platform provides a complete shopping experience including product browsing, cart management, secure authentication, Razorpay payment integration, order management, customer profiles, email notifications, and an admin dashboard.

The project consists of:

* Customer Frontend (React + Vite)
* Backend API (Node.js + Express)
* MongoDB Database
* Admin Dashboard
* Razorpay Payment Gateway
* Resend Email Service
* Cloudinary Image Storage

---

# 🚀 Features

## Customer Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Checkout
* User Profile Management

### Shopping

* Browse Products
* Product Details Page
* Size Selection
* Add To Cart
* Update Quantity
* Remove From Cart

### Checkout

* Customer Details Form
* Shipping Information
* Order Summary
* Razorpay Payment Integration

### Orders

* Order Creation
* Payment Verification
* Order History
* Delivery Estimation

### Email Notifications

Customer receives:

* Order Confirmation
* Expected Delivery Date

Admin receives:

* New Order Notification
* Customer Details
* Ordered Products
* Total Amount

---

# 👨‍💼 Admin Dashboard

## Dashboard

Displays:

* Total Orders
* Revenue
* Customers
* Pending Orders

## Orders Page

Shows:

* Customer Name
* Email
* Contact Number
* Address
* Ordered Items
* Quantity
* Size
* Amount
* Order Date
* Delivery Date
* Payment Status

## Products Page

Manage:

* Add Product
* Update Product
* Delete Product

## Customers Page

View:

* Registered Users
* Customer Details
* Order Information

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Context API
* Vite

## Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt

## Database

* MongoDB Atlas
* Mongoose

## Storage

* Cloudinary

## Payments

* Razorpay

## Emails

* Resend

## Deployment

Frontend:

* Vercel

Backend:

* Render

Database:

* MongoDB Atlas

---

# 📂 Project Structure

```
phool-si-pyari/

│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── config/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   ├── config/
│   ├── uploads/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/your-username/phool-si-pyari.git

cd phool-si-pyari
```

---

# Backend Setup

## Navigate

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Create .env

```env
PORT=5000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret

RAZORPAY_KEY_ID=your_key

RAZORPAY_KEY_SECRET=your_secret

RESEND_API_KEY=your_resend_key

CLOUDINARY_CLOUD_NAME=your_cloud

CLOUDINARY_API_KEY=your_key

CLOUDINARY_API_SECRET=your_secret

ADMIN_EMAIL=admin@example.com
```

## Run Backend

```bash
npm run server
```

Server runs at:

```
http://localhost:5000
```

---

# Frontend Setup

## Navigate

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Create .env

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key
```

## Run Frontend

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# MongoDB Collections

## Users

```js
{
  _id,
  name,
  email,
  contactNumber,
  password
}
```

## Products

```js
{
  _id,
  name,
  category,
  price,
  image,
  sizes,
  stock
}
```

## Orders

```js
{
  _id,
  userId,
  email,

  items: [
    {
      productId,
      name,
      image,
      size,
      qty,
      price
    }
  ],

  address: {
    name,
    address,
    city,
    state,
    contact,
    pincode
  },

  amount,

  payment,

  razorpayOrderId,
  razorpayPaymentId,

  date,

  estimatedDelivery
}
```

---

# Razorpay Flow

1. User clicks Pay Now
2. Frontend sends order request
3. Backend creates Razorpay Order
4. Razorpay Popup Opens
5. User completes payment
6. Backend verifies signature
7. Order status updated
8. Emails sent
9. Cart cleared
10. Success Page displayed

---

# Resend Email Flow

## Admin Email

Receives:

* Customer Details
* Address
* Ordered Products
* Total Amount
* Payment Information

## Customer Email

Receives:

* Order Confirmation
* Delivery Estimate
* Order Summary

---

# Deployment

## Backend Deployment (Render)

### Build Command

```bash
npm install
```

### Start Command

```bash
npm start
```

Add all environment variables in Render Dashboard.

---

## Frontend Deployment (Vercel)

### Environment Variables

```env
VITE_BACKEND_URL=https://your-backend.onrender.com

VITE_RAZORPAY_KEY_ID=your_key
```

Deploy:

```bash
vercel --prod
```

---

# API Endpoints

## Authentication

### Register

```http
POST /auth/register
```

### Login

```http
POST /auth/login
```

---

## Orders

### Create Razorpay Order

```http
POST /order/razorpay
```

### Verify Payment

```http
POST /order/verify
```

### Get User Orders

```http
GET /order/:userId
```

### Get All Orders

```http
GET /order/all
```

---

## Products

### Get Products

```http
GET /product/list
```

### Add Product

```http
POST /product/add
```

### Delete Product

```http
DELETE /product/:id
```

---

# Future Enhancements

* Wishlist
* Coupon System
* Product Reviews
* Order Tracking
* Inventory Management
* Analytics Dashboard
* AI Product Recommendations
* SMS Notifications
* PWA Support

---

# Author

### Shreehari Kalundia

MCA, NIT Jamshedpur

* MERN Stack Developer
* Photographer & Videographer
* System Design Enthusiast

---

# License

MIT License

Copyright © 2026 Phool Si Pyari

