import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f9fa] flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1c1d1f] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#1c1d1f] mb-2">Page Not Found</h2>
          <p className="text-sm text-[#6a6f73] mb-4">Sorry, the page you are looking for does not exist.</p>
          <Link href="/">
            <a className="text-[#a435f0] underline">Return Home</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
