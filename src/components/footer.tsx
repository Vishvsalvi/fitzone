import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container px-8 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
            <img
            src="/logo-f.png"
            alt="CrossFit Gym"
            className="w-[6rem]"
          />
            </Link>
            <p className="text-white/60">
              Your journey to a healthier, stronger you starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/membership" className="text-white/60 hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/60">
              <li>Tirupati Nagar phase 2</li>
              <li>Virar (w)</li>
              <li>Tel: (123) 456 7890</li>
              <li>Email: info@fitzonegym.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} FitZone Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

