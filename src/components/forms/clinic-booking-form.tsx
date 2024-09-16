'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'

// Simulated data
const services = [
  { id: 1, name: 'General Consultation', price: 50 },
  { id: 2, name: 'Specialist Consultation', price: 100 },
  { id: 3, name: 'Dental Check-up', price: 75 },
]

const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

export function ClinicBookingFormComponent() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
  const [selectedService, setSelectedService] = useState<number | undefined>(undefined)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    nextStep()
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    nextStep()
  }

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(parseInt(serviceId))
    nextStep()
  }

  const handlePayment = () => {
    // Implement payment logic here
    alert('Payment processed successfully!')
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8">
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Book Your Appointment</CardTitle>
            <CardDescription>Select your preferred date, time, and service</CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <Label>Select a Date</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  className="rounded-md border"
                />
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <Label>Select a Time</Label>
                <RadioGroup onValueChange={handleTimeSelect}>
                  {availableTimes.map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <RadioGroupItem value={time} id={time} />
                      <Label htmlFor={time}>{time}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <Label>Select a Service</Label>
                <Select onValueChange={handleServiceSelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id.toString()}>
                        {service.name} - ${service.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Booking Summary</h3>
                <p>Date: {selectedDate?.toDateString()}</p>
                <p>Time: {selectedTime}</p>
                <p>Service: {services.find(s => s.id === selectedService)?.name}</p>
                <p>Price: ${services.find(s => s.id === selectedService)?.price}</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button variant="outline" onClick={prevStep}>
                <ChevronLeftIcon className="mr-2 h-4 w-4" /> Back
              </Button>
            )}
            {step < 4 ? (
              <Button onClick={nextStep} disabled={
                (step === 1 && !selectedDate) ||
                (step === 2 && !selectedTime) ||
                (step === 3 && !selectedService)
              }>
                Next <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handlePayment}>
                Proceed to Payment
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>

      {/* Footer */}
    </div>
  )
}