# 🎬 Video Streaming Platform - Live Demo Setup

## ⚡ Quick Start (2-3 minutes)

### Option 1: Database के साथ (Production-like)

```bash
# 1️⃣ Repository clone करें
git clone https://github.com/Ganeshyadav77/video-streaming-platform.git
cd video-streaming-platform

# 2️⃣ Dependencies install करें
npm install

# 3️⃣ PostgreSQL setup करें
# macOS
brew install postgresql@15
brew services start postgresql@15

# Linux
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql

# Windows - Download from https://www.postgresql.org/download/windows/

# 4️⃣ Database create करें
psql -U postgres -c "CREATE DATABASE video_streaming_db;"

# 5️⃣ Update करें .env.local में
# DATABASE_URL="postgresql://postgres:postgres@localhost:5432/video_streaming_db"

# 6️⃣ Prisma migrations run करें
npx prisma generate
npx prisma db push

# 7️⃣ Server start करें
npm run dev
```

---

### Option 2: Database के बिना (Quick Demo)

अगर PostgreSQL install नहीं है तो एक **SQLite demo version** setup कर सकते हैं:

```bash
# Clone करें
git clone https://github.com/Ganeshyadav77/video-streaming-platform.git
cd video-streaming-platform

# Dependencies
npm install

# SQLite के लिए schema update करें
# prisma/schema.prisma में `provider = "sqlite"` करें
# DATABASE_URL="file:./dev.db"

# Migration
npx prisma db push

# Run करें
npm run dev
```

---

## 🌐 Browser में खोलें

```
http://localhost:3000
```

---

## 📋 Expected Output

```
> next dev
  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000
  - Environments: .env.local

Ready in 1234ms
```

---

## ✨ Features to Try

✅ **Video Upload** - `public/uploads/` में files save होंगी  
✅ **Video Streaming** - HLS player से videos चलेंगे  
✅ **Comments** - Database में store होंगे  
✅ **User Auth** - Sign up / Login कर सकते हैं  
✅ **Video Stats** - Views count track होंगे  

---

## 🛠️ Troubleshooting

### PostgreSQL Connection Error
```bash
# Connection check करें
psql -U postgres -d video_streaming_db

# या reset करें
psql -U postgres -c "DROP DATABASE video_streaming_db;"
psql -U postgres -c "CREATE DATABASE video_streaming_db;"
```

### Port 3000 already in use
```bash
# Different port पर चलाएं
npm run dev -- -p 3001
```

### Prisma Client Error
```bash
npx prisma generate --skip-engine
npx prisma db push --skip-generate
```

---

## 📚 Project Structure

```
src/
├── app/              # Next.js pages
│   ├── page.tsx      # Home page
│   ├── upload/       # Upload page
│   ├── watch/        # Video player
│   └── api/          # API routes
├── components/       # UI Components
└── lib/             # Utilities

prisma/
└── schema.prisma    # Database schema

public/uploads/      # Video storage
```

---

## 🎯 Next Steps

1. **Database ready हो गया** → Videos upload करें
2. **Videos काम करने लगें** → Streaming test करें
3. **Production के लिए** → AWS S3 setup करें

---

**Koi issue आए तो logs देखें:** `npm run dev` output में error दिखेगी

Happy Streaming! 🎉
