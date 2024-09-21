import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  AlertCircle,
  CheckCircle2,
  Shield,
  XCircle,
} from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const complianceData = [
  { name: 'CIS', compliant: 85, nonCompliant: 15 },
  { name: 'PCI-DSS', compliant: 92, nonCompliant: 8 },
  { name: 'GDPR', compliant: 78, nonCompliant: 22 },
  { name: 'HIPAA', compliant: 88, nonCompliant: 12 },
  { name: 'ISO 27001', compliant: 80, nonCompliant: 20 },
]

const ComplianceStatus = ({ value }: { value: number }) => {
  let color = 'text-red-500'
  let Icon = XCircle

  if (value >= 90) {
    color = 'text-green-500'
    Icon = CheckCircle2
  } else if (value >= 70) {
    color = 'text-yellow-500'
    Icon = AlertCircle
  }

  return (
    <div className={`flex items-center ${color}`}>
      <Icon className="w-5 h-5 mr-2" />
      <span className="font-bold">{value}%</span>
    </div>
  )
}

const SecurityCompliance = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Security Compliance</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {complianceData.map((standard) => (
          <Card key={standard.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {standard.name}
              </CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ComplianceStatus value={standard.compliant} />
              <Progress value={standard.compliant} className="mt-2" />
              <div className="mt-2 text-sm text-muted-foreground">
                {standard.nonCompliant}% non-compliant
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Compliance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={complianceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="compliant" name="Compliant" fill="#22c55e" />
              <Bar dataKey="nonCompliant" name="Non-Compliant" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default SecurityCompliance
