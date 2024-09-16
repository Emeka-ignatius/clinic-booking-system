'use client'

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js'
import { CalendarIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

// Simulated appointment data
const appointments = [
  { id: 1, patientName: 'John Doe', date: '2023-06-01', time: '09:00', service: 'General Consultation' },
  { id: 2, patientName: 'Jane Smith', date: '2023-06-01', time: '10:00', service: 'Dental Check-up' },
  { id: 3, patientName: 'Alice Johnson', date: '2023-06-02', time: '11:00', service: 'Specialist Consultation' },
  { id: 4, patientName: 'Bob Brown', date: '2023-06-02', time: '14:00', service: 'General Consultation' },
  { id: 5, patientName: 'Charlie Davis', date: '2023-06-03', time: '15:00', service: 'Dental Check-up' },
  // Add more appointments as needed
]

const getAppointmentsForDate = (date: Date) => {
  return appointments.filter(app => app.date === date.toISOString().split('T')[0])
}

const getAppointmentCountsByDate = () => {
  const counts: {[key: string]: number} = {}
  appointments.forEach(app => {
    counts[app.date] = (counts[app.date] || 0) + 1
  })
  return counts
}

export function AdminDashboardComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [viewMode, setViewMode] = useState<'day' | 'week'>('day')

  const appointmentsForSelectedDate = selectedDate ? getAppointmentsForDate(selectedDate) : []
  const appointmentCounts = getAppointmentCountsByDate()

  const chartData = {
    labels: Object.keys(appointmentCounts),
    datasets: [
      {
        label: 'Number of Appointments',
        data: Object.values(appointmentCounts),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Appointments per Day',
      },
    },
    scales: {
      x: {
        type: 'category' as const,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Appointments',
        },
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Clinic Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Appointment Calendar</CardTitle>
            <CardDescription>Select a date to view appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Appointment Summary</CardTitle>
            <CardDescription>Overview of appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="text-blue-500" />
                <span>Date: {selectedDate?.toDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserIcon className="text-green-500" />
                <span>Total Appointments: {appointmentsForSelectedDate.length}</span>
              </div>
              <Select value={viewMode} onValueChange={(value: 'day' | 'week') => setViewMode(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select view mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day View</SelectItem>
                  <SelectItem value="week">Week View</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>List of scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Service</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointmentsForSelectedDate.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.patientName}</TableCell>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.service}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Appointment Statistics</CardTitle>
            <CardDescription>Number of appointments per day</CardDescription>
          </CardHeader>
          <CardContent>
            <Bar data={chartData} options={chartOptions} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}