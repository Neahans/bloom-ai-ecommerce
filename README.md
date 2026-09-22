<div align="center">

# 🌿 Bloom AI

### ✨ A little place for beautiful finds & smart shopping ✨

<img src="https://img.shields.io/badge/React-Frontend-59633B?style=for-the-badge&logo=react&logoColor=white" alt="React" />
<img src="https://img.shields.io/badge/React_Router-Routing-E9A0A8?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
<img src="https://img.shields.io/badge/Django-Backend-59633B?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
<img src="https://img.shields.io/badge/Google_Gemini-AI-FFF4E8?style=for-the-badge&logo=google&logoColor=59633B" alt="Google Gemini" />

<br />

<img src="https://img.shields.io/badge/Status-In_Development-E9A0A8?style=flat-square" alt="Status" />
<img src="https://img.shields.io/github/license/Neahans/bloom-ai-ecommerce?style=flat-square&color=59633B" alt="License" />

<br /><br />

<img src="https://raw.githubusercontent.com/innng/innng/master/assets/kyubey.gif" width="100" />



🌸 🧸 🌿 🛍️ ✨ 🌷

### Shop • Discover • Chat • Bloom

</div>

---

## 🪴 About Bloom AI

**Bloom AI** is an aesthetic mini e-commerce frontend designed to make online shopping feel simple, friendly, and a little more personal.

The project combines a modern **React.js frontend** with a **Django REST API backend** and a **Google Gemini-powered AI shopping assistant**.

> 🌷 *Tell Bloom what you're looking for — and let your shopping journey bloom.*

The interface follows a soft editorial aesthetic using **olive green, blush pink, cream, and neutral tones**.

---

## 🎀 Features

### 🛍️ Shopping Experience

* ✦ Browse products
* 🌸 Browse products by category
* 👜 View detailed product information
* 📦 Display stock availability
* 💕 Wishlist-style interactions
* 🛒 Cart integration
* 🔎 Product discovery

### 🤖 Bloom AI

Meet your personal shopping buddy.

Users can ask Bloom AI questions such as:

```text
"I need something under ₹1500. Can you recommend a product?"
```

The chatbot communicates with the Django backend, which connects to **Google Gemini** to generate responses.

### 🔐 Authentication

The connected backend supports:

* 👤 User registration
* 🔑 JWT authentication
* 🔒 Protected cart operations
* ♡ User-specific cart items

### 🎨 UI & Design

* 🌿 Olive green + blush pink + cream palette
* ✨ Editorial-style homepage
* 🪞 Minimal product cards
* 📱 Responsive layout
* 🌸 Soft rounded UI elements
* 🤍 Clean and lightweight design
* 🧸 Floating Bloom AI chatbot

---

## 🧸 Tech Stack

| 🌷 Layer           | 🛠️ Technology        |
| ------------------ | --------------------- |
| 🎨 Frontend        | React.js              |
| 🌐 Routing         | React Router          |
| 🐍 Backend         | Django                |
| 🔌 API             | Django REST Framework |
| 🤖 AI              | Google Gemini         |
| 🔐 Authentication  | JWT                   |
| 🗄️ Database       | SQLite                |
| 🎀 Styling         | CSS                   |
| 📦 Package Manager | npm                   |

---

## 🌱 Project Architecture

```text
                    🌸 BLOOM AI
                         │
                         ▼
                ┌─────────────────┐
                │   React.js UI   │
                │                 │
                │  Home           │
                │  Shop           │
                │  Product Detail │
                │  Cart           │
                │  Bloom AI       │
                └────────┬────────┘
                         │
                         │ REST API
                         ▼
                ┌─────────────────┐
                │ Django Backend  │
                │                 │
                │ Products        │
                │ Authentication  │
                │ Cart            │
                │ Chatbot         │
                └────────┬────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
        🗄️ SQLite             🤖 Gemini AI
```

---

## 🌸 Frontend Structure

```text
bloom-ai-ecommerce/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Chatbot.js
│   │   ├── Chatbot.css
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Shop.js
│   │   ├── Shop.css
│   │   ├── ProductDetails.js
│   │   └── ProductDetails.css
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🏡 Pages

### 🌷 Home

The Bloom homepage includes:

* ✨ Editorial hero section
* 🌸 Category exploration
* 👜 New arrivals
* 🌿 Bloom AI introduction
* 💌 Newsletter section
* 🪴 Shopping features
* 🎀 Footer navigation

### 🛍️ Shop

The shop page retrieves products from the Django REST API and allows users to filter them by category.

Current categories include:

* 👗 Fashion
* 💄 Beauty
* 🎧 Electronics
* 👟 Footwear

### 💕 Product Details

Each product page displays:

* Product image
* Product name
* Category
* Price
* Description
* Stock availability
* Add-to-cart interface

### 🤖 Bloom AI

Bloom AI appears as a floating shopping assistant.

Users can open the chatbot and ask shopping-related questions without leaving the store.

---

## 🛍️ Sample Products

| 👜 Product                | 🌷 Category | 💰 Price |
| ------------------------- | ----------- | -------: |
| Blush Tote Bag            | Fashion     |     ₹899 |
| Olive Green Hoodie        | Fashion     |   ₹1,499 |
| Olive Wireless Headphones | Electronics |   ₹2,499 |
| Minimal Sneakers          | Footwear    |   ₹3,299 |
| Rose Skincare Set         | Beauty      |   ₹1,299 |

---

## 🖼️ Preview

### 🏡 Bloom Homepage

> ✨ Add your homepage screenshot here

```text
docs/screenshots/home.png
```

### 🛍️ Shop

> 🌸 Add your shop screenshot here

```text
docs/screenshots/shop.png
```

### 💕 Product Details

> 👜 Add your product details screenshot here

```text
docs/screenshots/product-details.png
```

### 🤖 Bloom AI

> 🌿 Add your chatbot screenshot here

```text
docs/screenshots/bloom-ai.png
```

💡 **Tip:** Once you upload your screenshots to GitHub, replace these placeholders with:

```markdown
![Bloom Homepage](docs/screenshots/home.png)
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Neahans/bloom-ai-ecommerce.git
```

### 2️⃣ Open the project

```bash
cd bloom-ai-ecommerce
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the React development server

```bash
npm start
```

The frontend will be available at:

```text
http://localhost:3000
```

---

## 🐍 Django Backend

The React frontend communicates with a separate Django REST API backend.

The backend provides APIs for:

```text
Products
Authentication
Cart
Bloom AI
```

Example API routes:

```text
GET  /api/products/
GET  /api/products/<id>/

POST /api/auth/register/
POST /api/auth/login/
POST /api/auth/refresh/

GET  /api/cart/
POST /api/cart/

POST /api/chat/
```

---

## 🤖 Gemini AI Configuration

Bloom AI requires a Gemini API key on the **Django backend**.

Create a `.env` file in the backend project:

```env
GEMINI_API_KEY=your_api_key_here
```

Then make sure your Django backend loads the environment variable before starting the server.

### 🔒 Important

**Never commit your `.env` file or expose your Gemini API key.**

The frontend repository does not need to contain the API key.

---

## 🌸 How Bloom AI Works

```text
👩 User
   │
   │ "Recommend something under ₹1500"
   ▼
🌷 React Chatbot
   │
   │ POST /api/chat/
   ▼
🐍 Django REST API
   │
   │ Gemini request
   ▼
🤖 Google Gemini
   │
   │ AI response
   ▼
🐍 Django
   │
   ▼
🌷 Bloom AI Chatbot
```

---

## 🧁 Future Improvements

Bloom is still growing 🌱

Planned improvements include:

* 🛒 Complete checkout flow
* 💳 Payment integration
* 📦 Order management
* ❤️ Persistent wishlist
* 🔎 Product search
* 🧠 Smarter AI product recommendations
* 👤 User profile
* 📊 Admin dashboard
* 🧾 Order history
* 📱 Improved mobile experience
* ✨ Better personalized recommendations

---

## 🌿 Why Bloom AI?

Bloom AI was created as a learning project to explore how **modern frontend development, REST APIs, authentication, databases, and generative AI** can work together in an e-commerce application.

The project brings together:

```text
🎨 React
   +
🐍 Django REST API
   +
🗄️ Database
   +
🤖 Generative AI
   =
🌿 Bloom AI
```

---

## 💌 Made With Love

<div align="center">

### 🌿 Bloom AI 🌿

Made with:

**React** ✦ **Django** ✦ **Gemini AI** ✦ **CSS**

<br />

🌸 🧸 🌿 🛍️ ✨ 🌷

### ✨ Keep growing. Keep creating. Keep blooming. ✨

<br />

**Made by [Neaha N S](https://github.com/Neahans)**

<br> <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" width="150" />

<br><br>
🐍 Backend

https://github.com/Neahans/bloom-ai-ecommerce-backend

</div>
```

