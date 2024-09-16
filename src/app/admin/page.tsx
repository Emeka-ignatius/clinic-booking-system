import { AdminDashboardComponent } from '@/components/admin-dashboard'
import MaxWidthWrapper from '@/components/layout/max-width-wrapper'

export default function AdminPage() {
  return (
    <MaxWidthWrapper>
        <AdminDashboardComponent/>
    </MaxWidthWrapper>
  )
}
