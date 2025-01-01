"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ButtonCTA } from "./button-cta"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-black/95">
        <div className="flex flex-col gap-8 mt-8">
          <Link href="/membership" className="text-lg text-white hover:text-[#96F95D]">
            Membership
          </Link>
          <Link href="/about" className="text-lg text-white hover:text-[#96F95D]">
            About
          </Link>
          <Link href="/contact" className="text-lg text-white hover:text-[#96F95D]">
            Contact
          </Link>
          <ButtonCTA className="w-full">Start your journey</ButtonCTA>
        </div>
      </SheetContent>
    </Sheet>
  )
}

