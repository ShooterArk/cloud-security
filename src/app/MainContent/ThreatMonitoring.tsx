import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  AlertOctagon,
  BarChart2,
  Activity,
} from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts'

const threatActivityData = [
  { name: 'Mon', threats: 12 },
  { name: 'Tue', threats: 19 },
  { name: 'Wed', threats: 3 },
  { name: 'Thu', threats: 5 },
  { name: 'Fri', threats: 2 },
  { name: 'Sat', threats: 3 },
  { name: 'Sun', threats: 9 },
]

const threatTypeData = [
  { name: 'Malware', value: 45 },
  { name: 'Phishing', value: 28 },
  { name: 'DDoS', value: 15 },
  { name: 'Insider', value: 12 },
]

const recentAlerts = [
  { id: 1, type: 'Critical', description: 'Potential data exfiltration detected', time: '2 mins ago' },
  { id: 2, type: 'High', description: 'Unusual login activity from foreign IP', time: '15 mins ago' },
  { id: 3, type: 'Medium', description: 'Failed brute force attempt', time: '1 hour ago' },
  { id: 4, type: 'Low', description: 'New device connected to network', time: '3 hours ago' },
  { id: 5, type: 'Info', description: 'System update available', time: '5 hours ago' },
]

const ThreatMonitoring = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Threat Monitoring & Detection</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Threats
            </CardTitle>
            <AlertOctagon className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground mt-2">
              3 critical, 4 high
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Threat Detection Rate
            </CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <Progress value={98.5} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Response Time
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5m 32s</div>
            <p className="text-xs text-muted-foreground mt-2">
              -12% from last week
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Threat Activity (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={threatActivityData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="threats" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Threat Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={threatTypeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" />
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
                    <p className="text-sm text-muted-foreground">{alert.time}</p>
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

export default ThreatMonitoring
