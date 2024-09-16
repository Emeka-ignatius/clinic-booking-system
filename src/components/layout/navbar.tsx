import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Nebs Clinic & Healthcare Service</Link>
          <div className="hidden md:flex space-x-4 gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/appointment">Appointment</Link>
            <Link href="/" className="hover:underline">Services</Link>
            <Link href="/" className="hover:underline">About</Link>
            <Link href="/" className="hover:underline">Contact</Link>
            <Link href="/admin" className="hover:underline">Admin</Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/appointment">Appointment</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin">Admin</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
  )
}
