// src/components/CommentSection.tsx
'use client'

import { useState } from 'react'
import { Comment } from '@/types'

export default function CommentSection({ videoId }: { videoId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [text, setText] = useState('')

  const addComment = async () => {
    if (!text.trim()) return

    const res = await fetch(`/api/videos/${videoId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' }
    })
    
    const comment = await res.json()
    setComments([comment, ...comments])
    setText('')
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      
      {/* Add Comment */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 bg-gray-800 rounded px-4 py-2"
        />
        <button
          onClick={addComment}
          className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700" />
            <div>
              <p className="font-semibold">{comment.user.username}</p>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}