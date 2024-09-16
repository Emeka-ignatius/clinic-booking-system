'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Baby,
  Microscope,
  Stethoscope,
  UserCog
} from 'lucide-react'
import Link from "next/link"
import { Button } from "./ui/button"
import MaxWidthWrapper from "./layout/max-width-wrapper"

export function QuickInfoSectionComponent() {
  const services = [
    { icon: Stethoscope, name: "General Consultation" },
    { icon: UserCog, name: "Specialist Care" },
    { icon: Baby, name: "Pediatric Care" },
    { icon: Microscope, name: "Diagnostics" },
  ]

  return (
    <MaxWidthWrapper>
      <div className="container grid mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center w-full h-[20svh]">
              <CardContent className="py-6">
                <service.icon className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
         
        </div>
        <Button asChild size="lg" className="bg-primary items-center justify-center mx-auto hover:bg-primary/90">
            <Link href="/appointment">Book Appointment</Link>
          </Button>

        {/* <div className="bg-background shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Clinic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Clock className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Operating Hours</h3>
                <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                <p>Sat-Sun: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>123 Health Street</p>
                <p>Medical City, HC 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Emergency Contact</h3>
                <p>Emergency: (123) 456-7890</p>
                <p>Reception: (123) 456-7891</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </MaxWidthWrapper>
  )
}