import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Microscope,
  Clock,
  BarChart2,
  FileSearch,
  Network,
  HardDrive,
  Wifi
} from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'


const incidentTypeData = [
  { name: 'Malware', value: 35 },
  { name: 'Phishing', value: 25 },
  { name: 'Data Breach', value: 20 },
  { name: 'DDoS', value: 15 },
  { name: 'Insider Threat', value: 5 },
]

const timelineData = [
  { name: 'Detection', value: 30 },
  { name: 'Analysis', value: 45 },
  { name: 'Containment', value: 60 },
  { name: 'Eradication', value: 40 },
  { name: 'Recovery', value: 55 },
]

const recentIncidents = [
  { id: 1, type: 'Malware', status: 'Ongoing', affectedSystems: 'Workstations', timeDetected: '2 hours ago' },
  { id: 2, type: 'Phishing', status: 'Contained', affectedSystems: 'Email Server', timeDetected: '1 day ago' },
  { id: 3, type: 'Data Breach', status: 'Resolved', affectedSystems: 'Customer Database', timeDetected: '3 days ago' },
  { id: 4, type: 'DDoS', status: 'Ongoing', affectedSystems: 'Web Servers', timeDetected: '5 hours ago' },
  { id: 5, type: 'Insider Threat', status: 'Under Investigation', affectedSystems: 'File Server', timeDetected: '12 hours ago' },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const IncidentForensics = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Incident Forensics</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Incidents
            </CardTitle>
            <Microscope className="h-4 w-4 text-muted-foreground" />
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
              Average Resolution Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4h 23m</div>
            <p className="text-xs text-muted-foreground mt-2">
              -15% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Incident Detection Rate
            </CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.5%</div>
            <Progress value={96.5} className="mt-2" />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Incident Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={incidentTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {incidentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
            <CardTitle>Incident Response Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timelineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Recent Incidents</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] w-full">
            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{incident.type}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {incident.type === 'Malware' && <HardDrive className="mr-1 h-4 w-4" />}
                      {incident.type === 'Phishing' && <FileSearch className="mr-1 h-4 w-4" />}
                      {incident.type === 'Data Breach' && <Network className="mr-1 h-4 w-4" />}
                      {incident.type === 'DDoS' && <Wifi className="mr-1 h-4 w-4" />}
                      {incident.type === 'Insider Threat' && <Users className="mr-1 h-4 w-4" />}
                      {incident.affectedSystems}
                    </div>
                    <p className="text-xs text-muted-foreground">{incident.timeDetected}</p>
                  </div>
                  <Badge
                    variant={
                      incident.status === 'Ongoing' ? 'destructive' :
                        incident.status === 'Contained' ? 'outline' :
                          incident.status === 'Resolved' ? 'default' :
                            'secondary'
                    }
                  >
                    {incident.status}
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

export default IncidentForensics
