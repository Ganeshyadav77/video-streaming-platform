import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest, { params }: { params: { videoId: string } }) {
  try {
    const body = await req.json()
    const text = body.text as string

    if (!text) {
      return NextResponse.json({ error: 'Comment text is required' }, { status: 400 })
    }

    const comment = await prisma.comment.create({
      data: {
        text,
        userId: 'temp-user-id',
        videoId: params.videoId,
      },
      include: {
        user: true,
      },
    })

    return NextResponse.json(comment)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Could not create comment' }, { status: 500 })
  }
}
