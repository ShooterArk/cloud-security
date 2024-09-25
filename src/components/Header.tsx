import React, { FC } from 'react'
import { Button } from './ui/button'
import { ExternalLink, Globe, Menu, Radio, User, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface IHeader {
  onToggleSideBar: () => void;
}

const Header: FC<IHeader> = ({ onToggleSideBar }) => {
  return (
    <nav className="bg-white shadow-sm px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onToggleSideBar}>
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold">Cloud Shield Secure</h1>
      </div>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Radio className="mr-2 h-4 w-4" />
              ⁠Cloud asset inventory
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Compute assets (Amazon, GCP,Azure,Kubernetes)</DropdownMenuItem>
            <DropdownMenuItem>Network assets (Amazon, GCP,Azure,Kubernetes)</DropdownMenuItem>
            <DropdownMenuItem>Storage assets (Amazon, GCP,Azure,Kubernetes)</DropdownMenuItem>
            <DropdownMenuItem>IAM (Amazon, GCP,Azure,Kubernetes)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="sm" className='hover:text-black text-black'>
          <Globe className="mr-2 h-4 w-4" />
          Threat Intelligence
        </Button>
        <Button variant="ghost" size="sm" className='hover:text-black text-black'>
          <ExternalLink className="mr-2 h-4 w-4" />
          External Exposure Management
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Radio className="mr-2 h-4 w-4" />
              Sensors Manager
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Agent based</DropdownMenuItem>
            <DropdownMenuItem>Agentless API based</DropdownMenuItem>
            <DropdownMenuItem>Playbooks</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="sm" className='hover:text-black text-black'>
          <User className="mr-2 h-4 w-4" />
          My Profile
        </Button>
      </div>
    </nav>
  )
}

export default Header
