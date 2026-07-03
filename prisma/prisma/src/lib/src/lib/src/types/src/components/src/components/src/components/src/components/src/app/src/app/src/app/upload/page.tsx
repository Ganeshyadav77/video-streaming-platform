// src/app/upload/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleUpload = async () => {
    if (!file || !title) return alert('Please fill all fields')
    
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)

    try {
      const res = await fetch('/api/videos/upload', {
        method: 'POST',
        body: formData
      })
      
      if (res.ok) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Upload Video</h1>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Video title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 bg-gray-800 rounded"
        />
        
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full p-3 bg-gray-800 rounded"
        />
        
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-blue-600 py-3 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </div>
    </div>
  )
}