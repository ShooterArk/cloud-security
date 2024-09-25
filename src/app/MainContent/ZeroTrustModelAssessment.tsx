import React from 'react'



import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  AlertTriangle, 
  CheckCircle, 
  LockKeyhole,
  UserCheck,
  Network,
  HardDrive,
  Smartphone,
  Server
} from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const zeroTrustPillars = [
  { name: 'Identity', score: 85 },
  { name: 'Devices', score: 70 },
  { name: 'Networks', score: 90 },
  { name: 'Applications', score: 75 },
  { name: 'Data', score: 80 },
]

const complianceScores = [
  { name: 'Identity', score: 85 },
  { name: 'Devices', score: 70 },
  { name: 'Networks', score: 90 },
  { name: 'Applications', score: 75 },
  { name: 'Data', score: 80 },
]

const recentAssessments = [
  { id: 1, component: 'User Authentication', status: 'Passed', score: 95, date: '2023-06-15' },
  { id: 2, component: 'Device Health', status: 'Needs Improvement', score: 68, date: '2023-06-14' },
  { id: 3, component: 'Network Segmentation', status: 'Passed', score: 92, date: '2023-06-13' },
  { id: 4, component: 'Application Access', status: 'Under Review', score: 78, date: '2023-06-12' },
  { id: 5, component: 'Data Encryption', status: 'Passed', score: 88, date: '2023-06-11' },
]
const ZeroTrustModelAssessment = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Zero Trust Model Assessment</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Zero Trust Score
            </CardTitle>
            <LockKeyhole className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <Progress value={80} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +5% from last assessment
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
              +2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Risk Score
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Low</div>
            <p className="text-xs text-muted-foreground mt-2">
              Improved from Medium
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Zero Trust Pillars Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={zeroTrustPillars}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Compliance Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complianceScores}>
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
          <CardTitle>Recent Assessments</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] w-full">
            <div className="space-y-4">
              {recentAssessments.map((assessment) => (
                <div key={assessment.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{assessment.component}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {assessment.component === 'User Authentication' && <UserCheck className="mr-1 h-4 w-4" />}
                      {assessment.component === 'Device Health' && <Smartphone className="mr-1 h-4 w-4" />}
                      {assessment.component === 'Network Segmentation' && <Network className="mr-1 h-4 w-4" />}
                      {assessment.component === 'Application Access' && <Server className="mr-1 h-4 w-4" />}
                      {assessment.component === 'Data Encryption' && <HardDrive className="mr-1 h-4 w-4" />}
                      Score: {assessment.score}
                    </div>
                    <p className="text-xs text-muted-foreground">{assessment.date}</p>
                  </div>
                  <Badge
                    variant={
                      assessment.status === 'Passed' ? 'default' :
                        assessment.status === 'Needs Improvement' ? 'destructive' :
                          'secondary'
                    }
                  >
                    {assessment.status}
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

export default ZeroTrustModelAssessment
