'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { QuickInfoSectionComponent } from "./quick-info-section"
import { Button } from "./ui/button"
import Link from "next/link"
import MaxWidthWrapper from "./layout/max-width-wrapper"

export function AboutSectionComponent() {
  const doctors = [
    { name: "Dr. Jane Smith", specialty: "General Practitioner", image: "/docs.png?height=200&width=200" },
    { name: "Dr. John Doe", specialty: "Pediatrician", image: "/docs.png?height=200&width=200" },
    { name: "Dr. Emily Brown", specialty: "Cardiologist", image: "/docs.png?height=200&width=200" },
  ]

  const testimonials = [
    { name: "Sarah Johnson", text: "The care I received at this clinic was exceptional. The staff was friendly and the doctors were very knowledgeable." },
    { name: "Michael Lee", text: "I've been coming to this clinic for years. They always provide top-notch service and genuinely care about their patients." },
    { name: "Emma Davis", text: "The pediatric care here is outstanding. My children always feel comfortable and well-cared for." },
  ]

  const values = [
   {name: "Our Mission", text: "To provide accessible, high-quality healthcare services that improve the health and well-being of our community."},
   {name: "Our Values", text: "We aim to provide compassion in every interaction, showcase excellence in medical care, respect for every individual and uphold integrity in all we do."},
   {name: "Our Commitment to You", text: "At Nebs Clinic & Healthcare Service, we are dedicated to delivering the highest standard of care to our patients. Our commitment to quality care and patient well-being is reflected in everything we do."},
 ]

  return (
    <MaxWidthWrapper>
      <div className="container py-12 mx-auto px-4">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">About Our Clinic</h2>
          <p className="text-lg mb-6">
            {`Welcome to Nebs Clinic & Healthcare Service, where your well-being is our top priority. 
            Established in 2000, we've been serving our community with compassionate and comprehensive care for over two decades.`}
          </p>
        </div>
        <div className="mb-16 grid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{value.name}</h3>
                  <p className="text-muted-foreground">{value.text}</p>
                </CardContent>
              </Card>
            ))}
            <Button asChild size="lg" className="bg-primary items-center justify-center mx-auto hover:bg-primary/90">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
          </div>
        </div>
        {/* Doctors and Staff */}
        <div className="mb-16 grid">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  <p className="text-muted-foreground">{doctor.specialty}</p>
                </CardContent>
              </Card>
            ))}
            <Button asChild size="lg" className="bg-primary items-center justify-center mx-auto hover:bg-primary/90">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
          </div>
        </div>

        {/* QuickInfo Section */}
        <QuickInfoSectionComponent/>

        {/* Testimonials Carousel */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Patients Say</h2>
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-lg mb-4">{testimonial.text}</p>
                      <p className="font-semibold"> {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}