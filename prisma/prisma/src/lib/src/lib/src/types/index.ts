// src/types/index.ts

export interface Video {
  id: string
  title: string
  description: string | null
  videoUrl: string | null
  thumbnail: string | null
  status: 'PROCESSING' | 'READY' | 'FAILED'
  views: number
  userId: string
  user: {
    id: string
    username: string
    avatarUrl: string | null
  }
  createdAt: Date
}

export interface Comment {
  id: string
  text: string
  userId: string
  videoId: string
  user: {
    username: string
    avatarUrl: string | null
  }
  createdAt: Date
}