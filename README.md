<div align="center">

# 🌿 Bloom AI

### ✨ A little place for beautiful finds & smart shopping ✨

<img src="https://img.shields.io/badge/React-Frontend-59633B?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Django-Backend-E9A0A8?style=for-the-badge&logo=django&logoColor=white" />
<img src="https://img.shields.io/badge/AI-Gemini-FFF4E8?style=for-the-badge&logo=google&logoColor=59633B" />
<img src="https://img.shields.io/badge/SQLite-Database-59633B?style=for-the-badge&logo=sqlite&logoColor=white" />

<br><br>

<img src="https://raw.githubusercontent.com/innng/innng/master/assets/kyubey.gif" width="100" />

### 🌸 Shop • Discover • Chat • Bloom 🌸

</div>

---

## 🪴 About Bloom AI

**Bloom AI** is a mini full-stack e-commerce platform designed to make online shopping feel simple, aesthetic, and a little more personal.

The project combines a **React frontend**, **Django REST API backend**, and **Gemini-powered AI chatbot** to create a modern shopping experience.

> 🌷 *Tell Bloom what you're looking for — and let your shopping journey bloom.*

---

## 🎀 Features

### 🛍️ Shopping

- ✦ Browse products
- 🌸 Product categories
- 👜 Product detail pages
- 💕 Wishlist-style UI
- 🛒 Shopping cart
- 📦 Stock availability
- 🔎 Product discovery

### 🤖 Bloom AI

Meet your personal shopping buddy!

You can ask things like:

```text
"I need something under ₹1500. Can you recommend a product?"

```
Bloom AI uses Google Gemini to respond to shopping-related questions.

🔐 Authentication
👤 User registration
🔑 JWT authentication
🔒 Protected cart API
♡ User-specific cart items
🎨 UI & Design
🌿 Olive green + blush pink + cream aesthetic
✨ Responsive design
🪞 Editorial-style homepage
📱 Mobile-friendly layout
🌸 Clean product cards
🤍 Minimal shopping experience
🧸 Tech Stack
<div align="center">
🌷 Layer	🛠️ Technology
🎨 Frontend	React.js
🌐 Routing	React Router
🐍 Backend	Django
🔌 API	Django REST Framework
🤖 AI	Google Gemini
🔐 Authentication	JWT
🗄️ Database	SQLite
🌸 Styling	CSS
📦 Package Manager	npm
</div>
🌱 Project Structure
bloom-ai-ecommerce/
│
├── public/
│
├── src/
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
├── package.json
├── package-lock.json
└── README.md
🪻 Screens
🏡 Home

A soft editorial-style homepage featuring:

✨ Hero section
🌸 Shop categories
👜 New arrivals
🌿 Bloom AI introduction
💌 Newsletter section
🪴 Feature highlights
🛍️ Shop

Browse the available products and filter them by category.

💕 Product Details

View:

Product image
Product name
Category
Price
Description
Stock availability
🤖 Bloom AI

A floating AI shopping assistant that lets users ask questions and receive Gemini-powered responses.

🌸 Example Products
🛍️ Product	🌷 Category	💰 Price
Blush Tote Bag	Fashion	₹899
Olive Green Hoodie	Fashion	₹1,499
Olive Wireless Headphones	Electronics	₹2,499
Minimal Sneakers	Footwear	₹3,299
Rose Skincare Set	Beauty	₹1,299
🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/Neahans/bloom-ai-ecommerce.git
cd bloom-ai-ecommerce
2️⃣ Install dependencies
npm install
3️⃣ Start the React frontend
npm start

The frontend will run at:

http://localhost:3000
🤖 Bloom AI Setup

The AI chatbot communicates with the Django backend.

The backend requires a Gemini API key stored in an environment variable.

Create a .env file in the Django backend:

GEMINI_API_KEY=your_api_key_here

🔒 Never commit your .env file or expose your API key publicly.

🌿 Backend

The frontend communicates with the Django REST API.

Example endpoints:

GET  /api/products/
GET  /api/products/<id>/

POST /api/auth/register/
POST /api/auth/login/
POST /api/auth/refresh/

GET  /api/cart/
POST /api/cart/

POST /api/chat/
🧁 Future Improvements

Bloom is still growing 🌱

Planned improvements include:

🛒 Complete checkout system
💳 Payment integration
📦 Order management
❤️ Persistent wishlist
🔍 Product search
🧠 Smarter AI product recommendations
👤 User profile
📊 Admin dashboard
📱 Improved mobile experience
🎀 Why Bloom AI?

Bloom AI was created to explore how modern web technologies and generative AI can work together in an e-commerce experience.

The project combines:

React
   ↓
Django REST API
   ↓
Database
   ↓
Gemini AI

🌷 Simple shopping + 🤖 AI assistance + 🎨 aesthetic design

💌 Made With Love
<div align="center">

🌿 Bloom AI 🌿

Made with
React ✦ Django ✦ Gemini AI ✦ CSS

<br> <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" width="150" />

<br><br>

✨ Keep growing. Keep creating. Keep blooming. ✨

♡ 🌸 🌿 🧸 🌷 ♡

</div> ```






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
