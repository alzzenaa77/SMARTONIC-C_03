"use client";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, Tooltip } from "recharts";

const speedData = [
  { t: 0, v: 80 },
  { t: 20, v: 70 },
  { t: 40, v: 75 },
  { t: 60, v: 65 },
  { t: 80, v: 78 },
  { t: 100, v: 55 },
  { t: 120, v: 95 },
];

const trafficData = [
  { time: "08:00", kendaraan: 40 },
  { time: "09:00", kendaraan: 25 },
  { time: "10:00", kendaraan: 18 },
  { time: "11:00", kendaraan: 30 },
];

export default function Chart({ type }: { type: "line" | "bar" }) {
  if (type === "line") {
    return (
      <LineChart width={600} height={300} data={speedData}>
        <Line type="monotone" dataKey="v" stroke="#00E389" />
        <CartesianGrid stroke="#333" />
        <XAxis dataKey="t" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  }
  return (
    <BarChart width={600} height={300} data={trafficData}>
      <Bar dataKey="kendaraan" fill="#00E389" />
      <CartesianGrid stroke="#333" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
    </BarChart>
    );
}