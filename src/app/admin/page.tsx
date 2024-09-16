import { AdminDashboardComponent } from '@/components/admin-dashboard'
import Footer from '@/components/layout/footer'
import MaxWidthWrapper from '@/components/layout/max-width-wrapper'
import Navbar from '@/components/layout/navbar'
import React from 'react'

export default function AdminPage() {
  return (
    <MaxWidthWrapper>
        <Navbar/>
        <AdminDashboardComponent/>
        <Footer/>
    </MaxWidthWrapper>
  )
}
