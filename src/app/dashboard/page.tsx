import { prisma } from '@/lib/prisma'
import VideoCard from '@/components/VideoCard'

export default async function Dashboard() {
  const videos = await prisma.video.findMany({
    where: { userId: 'temp-user-id' },
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
