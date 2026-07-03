// src/app/watch/[videoId]/page.tsx
import { prisma } from '@/lib/prisma'
import VideoPlayer from '@/components/VideoPlayer'
import CommentSection from '@/components/CommentSection'

export default async function WatchPage({ params }: { params: { videoId: string } }) {
  const video = await prisma.video.findUnique({
    where: { id: params.videoId },
    include: { user: true }
  })

  if (!video) return <div>Video not found</div>

  // View count badhao
  await prisma.video.update({
    where: { id: params.videoId },
    data: { views: { increment: 1 } }
  })

  return (
    <div className="max-w-6xl mx-auto">
      <VideoPlayer src={video.videoUrl!} />
      
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <p className="text-gray-400">{video.user.username} • {video.views} views</p>
      </div>
      
      <CommentSection videoId={video.id} />
    </div>
  )
}