import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const regionalData = [
  { name: "North", value: 42000 },
  { name: "South", value: 35000 },
  { name: "East", value: 28000 },
  { name: "West", value: 45000 },
]

const quarterlyData = {
  north: [
    { quarter: "Q1", sales: 9500 },
    { quarter: "Q2", sales: 10200 },
    { quarter: "Q3", sales: 11500 },
    { quarter: "Q4", sales: 10800 },
  ],
  south: [
    { quarter: "Q1", sales: 8200 },
    { quarter: "Q2", sales: 8500 },
    { quarter: "Q3", sales: 9300 },
    { quarter: "Q4", sales: 9000 },
  ],
  east: [
    { quarter: "Q1", sales: 6500 },
    { quarter: "Q2", sales: 7000 },
    { quarter: "Q3", sales: 7500 },
    { quarter: "Q4", sales: 7000 },
  ],
  west: [
    { quarter: "Q1", sales: 10500 },
    { quarter: "Q2", sales: 11000 },
    { quarter: "Q3", sales: 12000 },
    { quarter: "Q4", sales: 11500 },
  ],
}

const regionalPerformers = {
  north: [
    { name: "John Smith", sales: 12500, target: 10000 },
    { name: "Lisa Johnson", sales: 11200, target: 10000 },
    { name: "Mark Williams", sales: 9800, target: 10000 },
    { name: "Amy Davis", sales: 8500, target: 8000 },
  ],
  south: [
    { name: "Robert Brown", sales: 10200, target: 9000 },
    { name: "Jennifer Wilson", sales: 9500, target: 9000 },
    { name: "Michael Jones", sales: 8300, target: 9000 },
    { name: "Sarah Miller", sales: 7000, target: 8000 },
  ],
  east: [
    { name: "David Taylor", sales: 8200, target: 7000 },
    { name: "Susan Anderson", sales: 7500, target: 7000 },
    { name: "James Thomas", sales: 6800, target: 7000 },
    { name: "Patricia Jackson", sales: 5500, target: 6000 },
  ],
  west: [
    { name: "Charles White", sales: 12800, target: 11000 },
    { name: "Karen Harris", sales: 11500, target: 11000 },
    { name: "Steven Martin", sales: 10700, target: 11000 },
    { name: "Nancy Thompson", sales: 10000, target: 9000 },
  ],
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function RegionalPerformance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Regional Sales Performance</h1>
        <p className="text-muted-foreground">Detailed analysis of sales performance across different regions.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">North Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,000</div>
            <p className="text-xs text-muted-foreground">+8.2% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">South Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$35,000</div>
            <p className="text-xs text-muted-foreground">+5.7% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">East Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$28,000</div>
            <p className="text-xs text-muted-foreground">+3.1% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">West Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,000</div>
            <p className="text-xs text-muted-foreground">+10.5% from last year</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Sales Distribution</CardTitle>
          <CardDescription>Percentage of total sales by region</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionalData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="north">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="north">North</TabsTrigger>
          <TabsTrigger value="south">South</TabsTrigger>
          <TabsTrigger value="east">East</TabsTrigger>
          <TabsTrigger value="west">West</TabsTrigger>
        </TabsList>
        {Object.entries({
          north: { data: quarterlyData.north, performers: regionalPerformers.north, color: COLORS[0] },
          south: { data: quarterlyData.south, performers: regionalPerformers.south, color: COLORS[1] },
          east: { data: quarterlyData.east, performers: regionalPerformers.east, color: COLORS[2] },
          west: { data: quarterlyData.west, performers: regionalPerformers.west, color: COLORS[3] },
        }).map(([region, { data, performers, color }]) => (
          <TabsContent key={region} value={region} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{region.charAt(0).toUpperCase() + region.slice(1)} Region Quarterly Performance</CardTitle>
                <CardDescription>Sales performance by quarter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="quarter" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill={color} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Performers in {region.charAt(0).toUpperCase() + region.slice(1)} Region</CardTitle>
                <CardDescription>Sales representatives performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left font-medium">Name</th>
                        <th className="py-2 text-right font-medium">Sales</th>
                        <th className="py-2 text-right font-medium">Target</th>
                        <th className="py-2 text-right font-medium">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performers.map((performer, index) => (
                        <tr key={index} className={index < performers.length - 1 ? "border-b" : ""}>
                          <td className="py-2">{performer.name}</td>
                          <td className="py-2 text-right">${performer.sales.toLocaleString()}</td>
                          <td className="py-2 text-right">${performer.target.toLocaleString()}</td>
                          <td className="py-2 text-right">
                            <span className={performer.sales >= performer.target ? "text-green-500" : "text-red-500"}>
                              {((performer.sales / performer.target) * 100).toFixed(0)}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Regional Comparison</CardTitle>
          <CardDescription>Side-by-side comparison of all regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { name: "Q1", North: 9500, South: 8200, East: 6500, West: 10500 },
                  { name: "Q2", North: 10200, South: 8500, East: 7000, West: 11000 },
                  { name: "Q3", North: 11500, South: 9300, East: 7500, West: 12000 },
                  { name: "Q4", North: 10800, South: 9000, East: 7000, West: 11500 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="North" fill={COLORS[0]} />
                <Bar dataKey="South" fill={COLORS[1]} />
                <Bar dataKey="East" fill={COLORS[2]} />
                <Bar dataKey="West" fill={COLORS[3]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Key Insights</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            The West region consistently outperforms all other regions, with 30% higher sales than the East region.
          </li>
          <li>North region shows the most growth year-over-year at 8.2%.</li>
          <li>Q3 is the strongest quarter across all regions, showing seasonal trends in purchasing behavior.</li>
          <li>East region has the lowest performance but is showing steady improvement in recent quarters.</li>
          <li>Top performers exceed their targets by an average of 15% across all regions.</li>
        </ol>
      </div>
    </div>
  )
}

