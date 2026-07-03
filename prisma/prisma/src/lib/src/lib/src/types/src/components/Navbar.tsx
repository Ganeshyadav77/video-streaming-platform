// src/components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          VideoStream
        </Link>
        
        <div className="flex gap-4">
          <Link href="/upload" className="hover:text-blue-400">
            Upload
          </Link>
          <Link href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}