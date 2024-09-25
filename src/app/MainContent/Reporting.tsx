import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  FileText,
  PieChart,
  Download,
  Calendar,
  CloudRain,
  Database,
  ShieldCheck
} from "lucide-react"
import { Pie, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Line, ComposedChart, Area, Cell } from 'recharts'
import { Button } from '@/components/ui/button'

const cloudProviders = [
  { name: 'AWS', value: 45 },
  { name: 'Azure', value: 30 },
  { name: 'GCP', value: 20 },
  { name: 'Others', value: 5 },
]

const securityTrendData = [
  { name: 'Jan', vulnerabilities: 65, compliance: 80 },
  { name: 'Feb', vulnerabilities: 59, compliance: 82 },
  { name: 'Mar', vulnerabilities: 80, compliance: 78 },
  { name: 'Apr', vulnerabilities: 55, compliance: 85 },
  { name: 'May', vulnerabilities: 40, compliance: 90 },
  { name: 'Jun', vulnerabilities: 35, compliance: 92 },
]

const recentReports = [
  { id: 1, name: 'Monthly Cloud Security Overview', type: 'Automated', date: '2023-06-01', status: 'Generated' },
  { id: 2, name: 'Compliance Audit Report', type: 'Manual', date: '2023-05-15', status: 'In Review' },
  { id: 3, name: 'Vulnerability Assessment Summary', type: 'Automated', date: '2023-06-10', status: 'Generated' },
  { id: 4, name: 'Incident Response Timeline', type: 'Manual', date: '2023-05-28', status: 'Approved' },
  { id: 5, name: 'Access Control Audit', type: 'Automated', date: '2023-06-05', status: 'Generated' },
]


const Reporting = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reporting</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Overall Cloud Security Score
                </CardTitle>
                <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <Progress value={87} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  +3% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Cloud Assets Monitored
                </CardTitle>
                <CloudRain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Across multiple cloud providers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Compliance Rate
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <Progress value={92} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  Aligned with major cloud compliance frameworks
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
                        <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Security Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={securityTrendData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="vulnerabilities" fill="#8884d8" stroke="#8884d8" />
                    <Line type="monotone" dataKey="compliance" stroke="#82ca9d" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full">
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{report.name}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          {report.type === 'Automated' ? (
                            <Database className="mr-1 h-4 w-4" />
                          ) : (
                            <FileText className="mr-1 h-4 w-4" />
                          )}
                          {report.type}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          <Calendar className="inline mr-1 h-3 w-3" />
                          {report.date}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Badge 
                          variant={
                            report.status === 'Generated' ? 'default' :
                            report.status === 'In Review' ? 'secondary' :
                            'outline'
                          }
                          className="mr-2"
                        >
                          {report.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
    </div>
  )
}

export default Reporting
