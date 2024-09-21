import React, { FC } from 'react'
import { Button } from './ui/button'
import { ExternalLink, Globe, Menu, Radio, User } from 'lucide-react'

interface IHeader {
  onToggleSideBar: () => void;
}

const Header: FC<IHeader> = ({onToggleSideBar}) => {
  return (
    <nav className="bg-white shadow-sm px-4 py-2 flex items-center justify-between">
    <div className="flex items-center">
      <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onToggleSideBar}>
        <Menu className="h-6 w-6" />
      </Button>
      <h1 className="text-xl font-bold">Cloud Shield Secure</h1>
    </div>
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="sm">
        <Globe className="mr-2 h-4 w-4" />
        Threat Intelligence
      </Button>
      <Button variant="ghost" size="sm">
        <ExternalLink className="mr-2 h-4 w-4" />
        External Exposure Management
      </Button>
      <Button variant="ghost" size="sm">
        <Radio className="mr-2 h-4 w-4" />
        Sensors Manager
      </Button>
      <Button variant="ghost" size="sm">
        <User className="mr-2 h-4 w-4" />
        My Profile
      </Button>
    </div>
  </nav>
  )
}

export default Header
