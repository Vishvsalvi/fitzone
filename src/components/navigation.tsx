import Image from "next/image"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { ButtonCTA } from "./button-cta"
import { MobileNav } from "./mobile-nav"

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 py-4 px-4 bg-transparent">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo-f.png"
            alt="CrossFit Gym"
            className="w-[5rem]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white">
              Gym Benefits <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Coaching</DropdownMenuItem>
              <DropdownMenuItem>Equipment</DropdownMenuItem>
              <DropdownMenuItem>Community</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/membership" className="text-white hover:text-[#96F95D]">
            Membership
          </Link>
          <Link href="/about" className="text-white hover:text-[#96F95D]">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-[#96F95D]">
            Contact
          </Link>

          <ButtonCTA>Start your jouney</ButtonCTA>
        </div>

        <MobileNav />
      </div>
    </nav>
  )
}

