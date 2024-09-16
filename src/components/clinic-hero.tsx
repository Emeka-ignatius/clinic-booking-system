'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ClinicHeroComponent() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/heror-image.png"
        width={100}
        height={100}
        alt="Welcoming clinic environment"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0 w-full h-full"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Your Health, Our Priority
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8">
          Offering comprehensive care for you and your family.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-primary hover:text-white">
            <Link href="/">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}