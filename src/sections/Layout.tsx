import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}