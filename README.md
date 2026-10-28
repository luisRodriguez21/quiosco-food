# Quiosco Food

Food kiosk ordering web app. Customers browse the menu by category, add products to their order, review the summary and place it; an admin view lists incoming orders and marks them as completed.

## Features

- Menu grouped by category with product modal and quantity selector
- Order summary with live total and customer name
- Orders stored in MySQL through Prisma (order items saved as JSON)
- Admin panel that refreshes orders with SWR and marks them as ready
- Toast notifications and responsive layout with Tailwind CSS

## Tech stack

Next.js 13 · React 18 · Prisma 5 · MySQL · Tailwind CSS · SWR · Axios

## Getting started

```bash
git clone https://github.com/luisRodriguez21/quiosco-food.git
cd quiosco-food
npm install

# .env
# DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/quiosco"

npx prisma migrate dev   # create tables
npx prisma db seed       # load categories and products
npm run dev              # http://localhost:3000
```

The admin view is available at `/admin`.
