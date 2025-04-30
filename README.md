# Next.js & Django dashboard (Fullstack)

A modern fullstack dashboard template, designed for **newbies** and **intermediate devs** looking to learn real-world app structure.

Built using **Next.js 15 (App Router)** for the frontend and **Django REST Framework** for the backend. Features secure session-based authentication, protected routes, mobile-friendly UI, and reusable code patterns.

---

## ✨ Features

### 🌐 Frontend (Next.js 15 + App Router)
- Responsive layout with **HeroUI**, **Tailwind CSS**, and **Framer Motion**
- Sidebar drawer on mobile, header on top
- Protected routes using **middleware + client checks**
- Theme toggling (dark/light) with `useTheme()` hook
- Axios-based API communication with `credentials: include`
- Auth context: session caching, 401 interceptor, and **auto logout on idle**

### 🔐 Backend (Django + DRF)
- Session-based login/logout API (`/login`, `/logout`, `/me`)
- Secure CORS setup for frontend-only access
- Django settings split cleanly via `.env`
- API-only (no template rendering)
- Folder structure: views, serializers, models, URLs organized per feature

---

## 🛠 Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| Frontend    | Next.js 15, Tailwind CSS, HeroUI |
| Backend     | Django 5.2, Django REST Framework |
| Database     | PosgreSQL hosted in Railway |
| Auth        | Session + HttpOnly cookies    |
| Styling     | TailwindCSS + HeroUI + Motion |
| Hosting     | Ready for Railway + Vercel    |

---

## 🚀 Getting Started

### 1️⃣ Backend Setup (Django)

```bash
cd api-backend
cp .env.example .env
```

> Fill in the real DB and secret values in `.env`.

Then:

```bash
python -m venv env
source env/bin/activate       # or .\env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Your Django backend is now running at:  
👉 `http://localhost:8000`

---

### 2️⃣ Frontend Setup (Next.js)

```bash
cd frontend
cp .env.example .env.local
```

Set this in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Then run:

```bash
npm install
npm run dev
```

Visit the app:  
👉 `http://localhost:3000`

---

### 🗄️ Database: Railway PostgreSQL Setup
This project uses PostgreSQL hosted on Railway for a production-grade, cloud-based database.

You can either:

- Connect to an existing Railway PostgreSQL instance

- Or create a new one via Railway's dashboard

✅ If You're Setting Up PostgreSQL via Railway
Go to https://railway.app

- Create a new project → Choose PostgreSQL

- Copy the connection info from the "Connect" → "Public Network" tab

Example:

```bash
Host:     containers-us-west-xxx.railway.app
Port:     5432
Database: railway
User:     postgres
Password: your-long-password
```
Paste This Into Your .env in api-backend folder (example given later in this readme file)

🧪 Test DB Connection
Make sure your .env is set up, then:
```bash
cd api-backend
python manage.py migrate
python manage.py createsuperuser
```

You’re now connected to Railway’s PostgreSQL!

---

## 🔐 Authentication Logic

- `/login` → redirects to `/dashboard` if already logged in
- `/dashboard` and other protected routes → redirect to `/login` if not authenticated
- Auth state is stored in React context
- Session checked via `/me`
- Auto logout after **30 mins of inactivity**
- Global 401 handler via Axios

---

## ⚙️ Environment Variables

### 📁 `/api-backend/.env.example`

```env
SECRET_KEY=your-django-secret
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
FRONTEND_ORIGIN=http://localhost:3000

DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=5432
```

### 📁 `/frontend/.env.example`

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

## 📂 Folder Structure Overview

```
money-management/
├── api-backend/           # Django backend
│   ├── api/               # Views, serializers, URLs per feature
│   ├── backend/           # Settings, wsgi/asgi
│   ├── .env.example
│   └── manage.py
├── frontend/              # Next.js frontend
│   ├── app/               # Pages & layouts (App Router)
│   ├── hooks/             # Auth, theme, route guards
│   ├── lib/               # Axios, auth services
│   ├── public/
│   ├── utils/             # Stateless helper functions like validators and formatters
│   ├── .env.example
│   └── tailwind.config.js
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to use, share, and build upon it — credit appreciated.

---

## 🧠 Ideal For

- New developers learning fullstack
- Projects using session-based auth
- Dashboard-style app starters
- Django + Next.js integration practice

---

## 🔗 Connect with Me
GitHub: @shibinvl

LinkedIn: [Shibin VL](https://www.linkedin.com/in/shibin-v-l-5b8180182) 




![Stars](https://img.shields.io/github/stars/shibinvl/nextjs-dashboards-template?style=social)
![Issues](https://img.shields.io/github/issues/shibinvl/nextjs-dashboards-template)

