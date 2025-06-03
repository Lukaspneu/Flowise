# Zenet AI Demo

This is a demo SaaS application showing how businesses can configure AI-powered voice agents.

## Structure

- `frontend` – React app built with Vite and Tailwind CSS
- `backend` – Node.js Express server with MongoDB

## Setup

```
cd backend
npm install
cp .env.example .env
npm start
```

In another terminal:

```
cd frontend
npm install
npm run dev
```

The frontend expects the backend to run on `http://localhost:4000`.
