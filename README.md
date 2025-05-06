
<p align="center"><img align="center" width="280" src="https://skillicons.dev/icons?i=react"/></p>

<div align="center">React JS full-stack app.</div>
</br>

<div align="center">
  <img src="https://skillicons.dev/icons?i=tailwind,ts,vite,express,nodejs,sqlite,vercel,webstorm,pnpm,html,css" />
</div>

---

## 🗂️ Project Structure

```

.
├── client/              # React frontend (Vite)
│   ├── src/
│   └── ...
├── server/              # Express backend
│   ├── server.js
│   ├── db/
│   └── ...
└── README.md

````

---

## ⚙️ Tech Stack

### 🖼 Frontend:
- **React** + **Vite**
- **Tailwind CSS** + [shadcn/ui](https://ui.shadcn.com)
- **React Router**
- **zustand** (state management)
- **React Query**
- **Axios**
- **Sonner** (for toasts/notifications)

### 🧠 Backend:
- **Express.js**
- **better-sqlite3** (lightweight SQLite wrapper)
- **bcrypt** (password hashing)
- **jsonwebtoken** (JWT auth)
- **dotenv** (env variables)
- **cors** (cross-origin access)

---

## 📦 Getting Started

> ⚠️ **You must start the backend server before the frontend client.**

### 🛠 Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io) **(preferred)** – or npm/yarn

---

## 🧠 Backend Setup (Express + SQLite)

### ➤ Navigate to the `server/` folder

```bash
cd server
````

### 📥 Install dependencies

#### Using **pnpm**

```bash
pnpm install
```

#### Using npm

```bash
npm install
```

#### Using yarn

```bash
yarn
```

### ▶️ Start the server

```bash
node server.js
```

> The server will run at **[http://localhost:5000](http://localhost:5000)**

---

## 🖼 Frontend Setup (React + Vite)

### ➤ Navigate to the `client/` folder

```bash
cd client
```

### 📥 Install dependencies

#### Using **pnpm**

```bash
pnpm install
```

#### Using npm

```bash
npm install
```

#### Using yarn

```bash
yarn
```

### ▶️ Start the dev server

```bash
pnpm run dev
```

> The client will run at **[http://localhost:5173](http://localhost:5173)** (default Vite port)

---

## ✨ Features

* ✅ Auth with hashed passwords & JWT
* 🧠 Global state with `zustand`
* ⚡ Super-fast dev experience with `Vite`
* 🧬 SQL-powered persistence with `better-sqlite3`
* 🧪 Form validation with `zod` + `react-hook-form`
* 📡 API requests via Axios
* 🔔 Toasts with Sonner

---

<div align="center">
  <sub>Built with ☕, open-source tools, and good vibes.</sub>
</div>
