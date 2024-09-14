import Link from "next/link"
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <>
    {/* Footer */}
    <footer className="bg-[#1c1d1f] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold">
                EduTech
              </Link>
              <p className="mt-2 text-sm text-gray-400">Empowering learners worldwide with quality online education.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Learn</h3>
              <ul className="space-y-2">
                {["Courses", "Certificates", "Degrees", "Career Track"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community</h3>
              <ul className="space-y-2">
                {["Learners", "Partners", "Developers", "Beta Testers"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="space-y-2">
                {["Blog", "Facebook", "Twitter", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} EduTech. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Terms
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Privacy
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}