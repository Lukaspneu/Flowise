# Zenet AI Backend

## Setup

```bash
npm install
cp .env.example .env
npm start
```

## API
- `POST /api/auth/signup` - { email, password }
- `POST /api/auth/login` - { email, password }
- `POST /api/profile` - requires Authorization header `Bearer <token>`
- `GET /api/profile` - get profile
