'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import VulnerabilityManagement from './MainContent/VulnerabilityManagement'
import SecurityCompliance from './MainContent/SecurityCompliance'
import UnderDevelopment from './MainContent/UnderDevelopment'
import SecurityControlsValidation from './MainContent/SecurityControlsValidation'
import ThreatMonitoring from './MainContent/ThreatMonitoring'
import IncidentForensics from './MainContent/IncidentForensics'
import ZeroTrustModelAssessment from './MainContent/ZeroTrustModelAssessment'
import Reporting from './MainContent/Reporting'
import Preferences from './MainContent/Settings'
import Administration from './MainContent/Administration'
import MutliCloudManagement from './MainContent/MutliCloudManagement'
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
    switch (activeView) {
      case 0:
        return <SecurityCompliance />
      case 1:
        return <VulnerabilityManagement />
      case 2:
        return <SecurityControlsValidation />
      case 3:
        return <ThreatMonitoring />
      case 4:
        return <IncidentForensics />
      case 5:
        return <ZeroTrustModelAssessment />
      case 6:
        return <Reporting />
      case 7:
        return <Preferences />
      case 8:
        return <Administration />
      case 9:
        return <MutliCloudManagement />;
      default: 
        return <UnderDevelopment />
    }
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