import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
 
export default function NotFound() {
  return (
    <div>
      <Header />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      <Footer />
    </div>
  )
}