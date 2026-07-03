# Video Streaming Platform

A minimal Next.js video streaming platform.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file with a PostgreSQL database URL:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   ```

3. Generate Prisma client and migrate database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Project structure

- `src/app` - Next.js app routes and pages
- `src/components` - Shared UI components
- `src/lib/prisma.ts` - Prisma client singleton
- `prisma/schema.prisma` - Prisma database schema

## Notes

- The app currently uses a temporary `userId` for uploads and comments.
- Uploaded video files are saved to `public/uploads`.
- Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`.
