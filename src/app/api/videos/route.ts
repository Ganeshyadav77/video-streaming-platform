import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const videos = await prisma.video.findMany({
    where: { status: 'READY' },
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(videos)
}
