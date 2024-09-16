import { ClinicBookingFormComponent } from '@/components/forms/clinic-booking-form'
import MaxWidthWrapper from '@/components/layout/max-width-wrapper'
import React from 'react'

export default function AppointmentPage() {
  return (
    <MaxWidthWrapper>
    <ClinicBookingFormComponent/>
   </MaxWidthWrapper>
  )
}
