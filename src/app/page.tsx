'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import VulnerabilityManagement from './MainContent/VulnerabilityManagement'
import SecurityCompliance from './MainContent/SecurityCompliance'
import UnderDevelopment from './MainContent/UnderDevelopment'
const data = [
  { name: 'Jan', vulnerabilities: 400 },
  { name: 'Feb', vulnerabilities: 300 },
  { name: 'Mar', vulnerabilities: 200 },
  { name: 'Apr', vulnerabilities: 278 },
  { name: 'May', vulnerabilities: 189 },
  { name: 'Jun', vulnerabilities: 239 },
  { name: 'Jul', vulnerabilities: 349 },
  { name: 'Aug', vulnerabilities: 278 },
  { name: 'Sep', vulnerabilities: 190 },
  { name: 'Oct', vulnerabilities: 160 },
  { name: 'Nov', vulnerabilities: 120 },
  { name: 'Dec', vulnerabilities: 100 },
]
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeView, setActiveView] = useState<number>(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const getContent = () => {
    if (activeView === 0) {
      return <SecurityCompliance />
    }
    if (activeView === 1) {
      return <VulnerabilityManagement />
    }

    return <UnderDevelopment />

    // return (
    //   <>
    //     <h2 className="text-2xl font-bold mb-4">Welcome to Your Security Dashboard</h2>
    //     <p>This is where your main content will go. You can add charts, tables, and other components related to security compliance, vulnerability management, threat monitoring, and more.</p>
    //     <Card className="w-full h-[calc(100vh-8rem)]">
    //       <CardHeader>
    //         <CardTitle>Vulnerabilities Over Time</CardTitle>
    //       </CardHeader>
    //       <CardContent className="h-[calc(100%-5rem)]">
    //         <ResponsiveContainer width="100%" height="100%">
    //           <BarChart data={data}>
    //             <XAxis dataKey="name" />
    //             <YAxis />
    //             <Tooltip />
    //             <Bar dataKey="vulnerabilities" fill="#8884d8" />
    //           </BarChart>
    //         </ResponsiveContainer>
    //       </CardContent>
    //     </Card>
    //   </>
    // )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header onToggleSideBar={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeView={activeView} isSidebarOpen={isSidebarOpen} onViewChange={(viewNumber: number) => setActiveView(viewNumber)} />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-auto">
          {getContent()}
        </main>
      </div>
    </div>
  )
}