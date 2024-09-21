import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Construction,
  Hammer,
  HardHat,
  Wrench
} from "lucide-react"

const UnderDevelopment = () => {
  return (
    <div>
      <Card className="w-full h-full flex flex-col items-center justify-center text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Page Under Development</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="flex space-x-4 mb-6">
                <Construction className="h-16 w-16 text-yellow-500" />
                <Hammer className="h-16 w-16 text-blue-500" />
                <HardHat className="h-16 w-16 text-orange-500" />
                <Wrench className="h-16 w-16 text-green-500" />
              </div>
              <p className="text-xl mb-4">We're working hard to bring you this feature!</p>
              <p className="text-muted-foreground mb-8">Our team is currently developing this page. Check back soon for updates.</p>
            </CardContent>
          </Card>
    </div>
  )
}

export default UnderDevelopment
