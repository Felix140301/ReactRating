# ReactRating

A brief description of what the application does and its purpose.

---

## Tech Stack

### **Frontend**

- React
- Vite
- TypeScript (optional)
- React Router (optional)
- Tailwind / CSS Modules / Styled Components (optional)

### **Backend**

- Next.js (API routes)
- Node.js
- Any additional libraries (e.g., Prisma, MongoDB, PostgreSQL)

---

## Getting Started

### 1. Clone the Frontend Repo

```bash
git clone https://github.com/Felix140301/ReactRating
cd react-rating
```

```bash
cd frontend
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run build
```

### 2 Clone the Backend Repo

```bash
git clone https://github.com/tonymihut/rw-api
```

## Setup

```bash
npm install
```

## Running the API

```bash
npm start
```

By default the server listens on `http://localhost:8055`.

## Endpoints

### `GET /products`

Returns the list of products with embedded reviews.

### `POST /products/:productId/reviews`

Adds a review to a product. Body parameters:

| Field    | Type   | Required | Notes                                  |
| -------- | ------ | -------- | -------------------------------------- |
| `text`   | string | yes      | Review content; trimmed before saving. |
| `rating` | number | yes      | Integer 1-5.                           |

Sample request:

```bash
curl -X POST http://localhost:8055/products/pour-over-kit/reviews \
  -H "Content-Type: application/json" \
  -d '{"text": "Great bloom control.", "rating": 4}'
```

Successful responses return the updated product along with all reviews. Errors use conventional HTTP status codes (400 for validation issues, 404 if the product ID does not exist, 500 for server errors).
