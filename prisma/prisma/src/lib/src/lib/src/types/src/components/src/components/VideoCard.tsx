// src/components/VideoCard.tsx
import Link from 'next/link'
import { Video } from '@/types'

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Link href={`/watch/${video.id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition">
        {/* Thumbnail */}
        <div className="aspect-video bg-gray-700">
          {video.thumbnail && (
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
          )}
        </div>
        
        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold truncate">{video.title}</h3>
          <p className="text-sm text-gray-400">{video.user.username}</p>
          <p className="text-sm text-gray-500">{video.views} views</p>
        </div>
      </div>
    </Link>
  )
}