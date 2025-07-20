
Here is the updated professional `README.md` file including the use of **Clerk** for authentication when users click **"Order Now"**:

---

# 🍔 Machdoaliz Restaurant Website

A modern, responsive restaurant website built with **React + Vite**, styled using **Tailwind CSS**, and powered by **JSON Server** for mock backend functionality.

## 📄 Overview

This project is a multi-page website for **Machdoaliz Restaurant**, showcasing key pages that include:

* 🏠 Home
* 🍽️ Menu
* ℹ️ About
* 📞 Contact

The site is fully responsive, offers smooth client-side navigation via `react-router-dom`, includes an interactive map and contact form, and features user authentication through **Clerk**.

---

## 🚀 Features

* ✅ Built with **React + Vite** for fast development and performance.
* ✅ Routing handled by **react-router-dom**.
* ✅ Backend powered by **JSON Server** (`db.json`) with:

  * `categories`
  * `featuredMeals`
  * `menuItems`
  * `messages` (contact form submissions)
* ✅ Used **concurrently** to run both frontend and JSON Server with one command.
* ✅ Global state management using **React Context API**.
* ✅ Data fetching via **Axios**.
* ✅ Interactive map integration using **Leaflet** (Machdoaliz locations in Egypt).
* ✅ Fully **responsive design** with **Tailwind CSS**.
* ✅ **User authentication** using **Clerk** – when a user clicks **"Order Now"**, the **sign-in page** is triggered via Clerk.

---

## 🧱 Tech Stack

| Tech             | Purpose                        |
| ---------------- | ------------------------------ |
| React + Vite     | Frontend SPA                   |
| Tailwind CSS     | Styling and responsiveness     |
| React Router DOM | Client-side routing            |
| Axios            | API calls                      |
| Context API      | Global state for fetched data  |
| JSON Server      | Mock backend / REST API        |
| Concurrently     | Run client and server together |
| Leaflet          | Map integration                |
| **Clerk**        | Authentication (Sign-in flow)  |

---

## 📁 Project Structure

```
/machdoaliz-restaurant
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🔄 Data Flow

* The context component (`ProductsContext`) fetches `categories`, `featuredMeals`, and `menuItems` from `db.json` using Axios and provides them across the app.
* Contact form on the **Contact** page sends form values to the `messages` array in `db.json` via a POST request.
* Map is rendered using Leaflet to show restaurant locations in Egypt.
* When users click **"Order Now"**, they are redirected to **Clerk’s sign-in page** for authentication before proceeding.

---

## 🛠️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/machdoaliz-restaurant.git
cd machdoaliz-restaurant
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

This runs both:

* React frontend (`localhost:5173`)
* JSON Server backend (`localhost:3000`)

> Thanks to the `concurrently` package, no need to run `json-server` separately.

---

## 📦 Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Run frontend and JSON server |
| `npm run build`   | Create production build      |
| `npm run preview` | Preview production build     |

---

## 📬 Contact Form Handling

* User fills out the contact form.
* On submit, the data is sent to `http://localhost:3000/messages` (JSON Server).
* Messages are stored persistently in the `messages` array of `db.json`.

---

## 🗺️ Map Integration

* Implemented using **Leaflet**.
* Displays static Machdoaliz restaurant locations across Egypt.

---

## 🔐 Authentication (Clerk)

* **Clerk** is used for user authentication.
* When a user clicks the **"Order Now"** button, they are redirected to **Clerk's Sign-In page**.
* Upon successful login, users can proceed with ordering actions (future integration-ready).

---

## 📱 Responsive Design

Built entirely with **Tailwind CSS**, the website adapts beautifully across all screen sizes, from mobile phones to desktops.

---

## 📌 Final Notes

This project simulates a full restaurant website with dynamic routing, form handling, map integration, and user authentication — a solid example of modern frontend architecture.

