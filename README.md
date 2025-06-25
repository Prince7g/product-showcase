# 🛍️ Product Showcase Web App

This is a fully responsive product listing app built with **React.js**, **Tailwind CSS**, and **Vite**.  
It uses the **FakeStoreAPI** for product data and supports filtering, sorting, pagination, product detail view, and a dummy cart.

This project was created as part of a frontend developer assignment.

---

## 🔗 Live Demo

- 🔴 Website: [https://product-showcase-xclz.vercel.app](https://product-showcase-xclz.vercel.app)
- 🟢 GitHub: [https://github.com/Prince7g/product-showcase](https://github.com/Prince7g/product-showcase)

---

## ✨ Features

- Product grid (10 per page)
- Filter by category and price range
- Sort by price, rating, and name
- Product detail page with full info
- Add to Cart (dummy functionality)
- Cart page with total calculation
- Responsive on mobile/tablet/desktop

---

## ⚙️ Tech Stack

- React 18 (with Vite)
- Tailwind CSS 3
- React Router v6
- React Context API (for Cart)
- FakeStoreAPI (data)
- Vercel (deployment)

---

## 🧩 Bonus: Magento 2 / PWA Demo

To fulfill the bonus task in the PDF, I added a GraphQL integration with Adobe's **Magento Venia demo store**.

- File: `src/components/MagentoDemo.jsx`
- Uses GraphQL to fetch real Magento products
- Accessible at:  
  👉 `/magento-demo` route  
  👉 [https://product-showcase-xclz.vercel.app/magento-demo](https://product-showcase-xclz.vercel.app/magento-demo)
- Kept separate from the main app so deployment is unaffected

---

## 📦 Installation (for testing locally)

```bash
git clone https://github.com/Prince7g/product-showcase.git
cd product-showcase
npm install
npm run dev
