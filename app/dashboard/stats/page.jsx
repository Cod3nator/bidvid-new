'use client'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from "recharts";
  
  // Example data
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  
  export default function ChartPage() {
    return (

        <div class="container mx-auto px-4">

        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-8">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-gray-500">Showing for: 21 Oct – 28 Oct 2020</p>
        </div>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">Total balance</h2>
            <p className="text-4xl font-bold mb-1">$12,319</p>
            <span className="text-green-500">↑ 3.27%</span>
          </div>
  
          {/* Expenses Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">Expenses</h2>
            <div className="relative flex justify-center items-center">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex justify-center items-center">
                <span className="text-3xl font-semibold">$1,376</span>
              </div>
              <p className="absolute bottom-0 text-sm text-gray-500">House rent</p>
            </div>
          </div>
  
          {/* Send Money / Actions */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4">
              Send money
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Top up
            </button>
          </div>
        </div>
  
        {/* Transactions Overview with ComposedChart */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Transactions Overview</h2>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              <Scatter dataKey="cnt" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>
    );
  }