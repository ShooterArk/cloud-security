import React, { FC } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'
import { AlertTriangle, Bell, CheckCircle, Cloud, FileText, Lock, Search, Settings, Shield, Users } from 'lucide-react'

interface ISidebar {
  isSidebarOpen: boolean;
  activeView: number;
  onViewChange: (viewNumber: number) => void;
}

const Sidebar: FC<ISidebar> = ({isSidebarOpen, activeView, onViewChange}) => {

  const getActiveViewStyle = (current: number) => {
    if (activeView === current) return "bg-blue-500 hover:bg-blue-500 hover:text-white text-white";

    return "";
  }

  return (
    <aside className={`bg-white w-72 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static fixed z-30 h-full`}>
      <ScrollArea className="flex-grow p-2">
        <nav className="space-y-2">
          <Button variant="ghost" onClick={() => onViewChange(0)} className={`w-full justify-start ${getActiveViewStyle(0)}`}>
            <Shield className="mr-2 h-4 w-4" />
            Security Compliance
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(1)} className={`w-full justify-start ${getActiveViewStyle(1)}`}>
            <AlertTriangle className="mr-2 h-4 w-4" />
            Vulnerability Management
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(2)} className={`w-full justify-start ${getActiveViewStyle(2)}`}>
            <CheckCircle className="mr-2 h-4 w-4" />
            Security Controls Validation (BAS)
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(3)} className={`w-full justify-start ${getActiveViewStyle(3)}`}>
            <Bell className="mr-2 h-4 w-4" />
            Threat Monitoring & Detection
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(4)} className={`w-full justify-start ${getActiveViewStyle(4)}`}>
            <Search className="mr-2 h-4 w-4" />
            Incident Forensics
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(5)} className={`w-full justify-start ${getActiveViewStyle(5)}`}>
            <Lock className="mr-2 h-4 w-4" />
            Zero Trust Model Assessment
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(6)} className={`w-full justify-start ${getActiveViewStyle(6)}`}>
            <FileText className="mr-2 h-4 w-4" />
            Reporting
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(7)} className={`w-full justify-start ${getActiveViewStyle(7)}`}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(8)} className={`w-full justify-start ${getActiveViewStyle(8)}`}>
            <Users className="mr-2 h-4 w-4" />
            Administration
          </Button>
          <Button variant="ghost" onClick={() => onViewChange(8)} className={`w-full justify-start ${getActiveViewStyle(9)}`}>
            <Cloud className="mr-2 h-4 w-4" />
            Multi Cloud Management
          </Button>
        </nav>
      </ScrollArea>
    </aside>
  )
}

export default Sidebar
