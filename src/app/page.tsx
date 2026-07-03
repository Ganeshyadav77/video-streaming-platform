import { prisma } from '@/lib/prisma'
import VideoCard from '@/components/VideoCard'

export default async function Home() {
  const videos = await prisma.video.findMany({
    where: { status: 'READY' },
    include: { user: true },
    orderBy: { createdAt: 'desc' },
    take: 12,
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Recommended Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
