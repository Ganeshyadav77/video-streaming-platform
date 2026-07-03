import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { prisma } from '@/lib/prisma'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string

    if (!file || !title) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = path.join(process.cwd(), 'public', 'uploads', file.name)
    await writeFile(filePath, buffer)

    const video = await prisma.video.create({
      data: {
        title,
        videoUrl: `/uploads/${file.name}`,
        status: 'READY',
        userId: 'temp-user-id',
      },
    })

    return NextResponse.json(video)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
