import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-primary mt-8">
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Nebs Clinic & Healthcare Service</h3>
          <p>Providing quality healthcare services since 2000.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/" className="hover:underline">Services</Link></li>
            <li><Link href="/" className="hover:underline">About Us</Link></li>
            <li><Link href="/" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>123 Clinic Street, Medical City, HC 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@clinicname.com</p>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center">
        <p>&copy; 2023 Nebs Clinic & Healthcare Service. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </div>
  )
}
