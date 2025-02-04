import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  PieChart,
  AlertCircle,
  Server,
  ShieldCheck,
  CloudOff,
  CloudRain
} from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Cell, Pie } from 'recharts'

const cloudProviders = [
  { name: 'AWS', value: 45, color: '#FF9900' },
  { name: 'Azure', value: 30, color: '#0089D6' },
  { name: 'GCP', value: 20, color: '#4285F4' },
  { name: 'Others', value: 5, color: '#34A853' },
]

const securityScores = [
  { name: 'AWS', score: 85 },
  { name: 'Azure', score: 78 },
  { name: 'GCP', score: 92 },
  { name: 'Others', score: 70 },
]

const recentAlerts = [
  { id: 1, provider: 'AWS', type: 'Critical', description: 'Unauthorized access attempt detected', time: '5 mins ago' },
  { id: 2, provider: 'Azure', type: 'High', description: 'Unusual outbound data transfer', time: '15 mins ago' },
  { id: 3, provider: 'GCP', type: 'Medium', description: 'Misconfigured firewall rule', time: '1 hour ago' },
  { id: 4, provider: 'AWS', type: 'Low', description: 'New IAM user created', time: '2 hours ago' },
  { id: 5, provider: 'Azure', type: 'Info', description: 'Successful database backup', time: '3 hours ago' },
]


const MutliCloudManagement = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Multi Cloud Management</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Cloud Assets
            </CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground mt-2">
              Across all cloud providers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Security Score
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">83%</div>
            <Progress value={83} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +2% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Alerts
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">17</div>
            <p className="text-xs text-muted-foreground mt-2">
              5 critical, 8 high, 4 medium
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Cloud Provider Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={cloudProviders}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {cloudProviders.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Security Scores by Cloud Provider</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={securityScores}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] w-full">
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{alert.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {alert.provider === 'AWS' && <CloudRain className="mr-1 h-4 w-4 text-[#FF9900]" />}
                      {alert.provider === 'Azure' && <CloudRain className="mr-1 h-4 w-4 text-[#0089D6]" />}
                      {alert.provider === 'GCP' && <CloudRain className="mr-1 h-4 w-4 text-[#4285F4]" />}
                      {alert.provider === 'Others' && <CloudOff className="mr-1 h-4 w-4" />}
                      {alert.provider}
                    </div>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                  <Badge
                    variant={
                      alert.type === 'Critical' ? 'destructive' :
                        alert.type === 'High' ? 'default' :
                          alert.type === 'Medium' ? 'secondary' :
                            alert.type === 'Low' ? 'outline' : 'default'
                    }
                  >
                    {alert.type}
                  </Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

export default MutliCloudManagement
