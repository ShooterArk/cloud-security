import React from 'react'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck,
  ShieldAlert,
  Activity,
  Zap
} from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const controlEffectivenessData = [
  { name: 'Network', effectiveness: 85 },
  { name: 'Endpoint', effectiveness: 78 },
  { name: 'Email', effectiveness: 92 },
  { name: 'Web', effectiveness: 70 },
  { name: 'Cloud', effectiveness: 88 },
]

const recentSimulations = [
  { id: 1, name: 'Phishing Campaign', status: 'Completed', score: 85 },
  { id: 2, name: 'Ransomware Attack', status: 'In Progress', score: null },
  { id: 3, name: 'Data Exfiltration', status: 'Completed', score: 72 },
  { id: 4, name: 'DDoS Attack', status: 'Scheduled', score: null },
  { id: 5, name: 'Insider Threat', status: 'Completed', score: 90 },
]

const SecurityControlsValidation = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Security Controls Validation (BAS)</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Security Score
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <Progress value={82} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +5% from last assessment
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Critical Vulnerabilities
            </CardTitle>
            <ShieldAlert className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">
              -2 from last assessment
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Simulations
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-2">
              In the last 30 days
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Control Effectiveness by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={controlEffectivenessData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="effectiveness" name="Effectiveness (%)" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Simulations</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full">
              <div className="space-y-4">
                {recentSimulations.map((simulation) => (
                  <div key={simulation.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{simulation.name}</p>
                      <Badge
                        variant={simulation.status === 'Completed' ? 'default' :
                          simulation.status === 'In Progress' ? 'secondary' : 'outline'}
                      >
                        {simulation.status}
                      </Badge>
                    </div>
                    {simulation.score !== null && (
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                        <span className="font-bold">{simulation.score}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SecurityControlsValidation
