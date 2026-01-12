"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import styles from "./AnalyticsChart.module.css";
import "../admin.css";

type ChartData = {
  packageName: string;
  count: number;
};

export default function AnalyticsChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/analytics/summary")
      .then((res) => res.json())
      .then((raw) => {
        console.log(raw);
        
        // ✅ only views
        const viewsOnly = raw.filter(
          (item: any) => item.type === "callback"
        );

       const formatted = viewsOnly
  .map((item: any) => ({
    packageName: item.packageName,
    count: item.count,
  }))
          .sort((a: any, b: any) => b.count - a.count);
        // for top ten
// const formatted = viewsOnly
//   .map((item: any) => ({
//     packageName: item.packageName,
//     count: item.count,
//   }))
//   .sort((a, b) => b.count - a.count)
//   .slice(0, 10);

console.log(formatted);

        setData(formatted);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading analytics...</p>;
  if (data.length === 0) return <p>No analytics data yet</p>;

  return (
<div className={styles.card}>
  <h3 className={styles.title}>
    📞 Package Callback Requests (This Month)
  </h3>

  <div className={styles.chartWrapper}>
    <ResponsiveContainer>
      <BarChart
        data={data}
        barCategoryGap="20%"
        margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="packageName"
          interval={Math.ceil(data.length / 10)}
          angle={-25}
          textAnchor="end"
          height={60}
          tick={{ fontSize: 11, fill: "#6b7280" }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{ fontSize: 12, fill: "#6b7280" }}
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />

        <Tooltip
          cursor={{ fill: "rgba(99,102,241,0.08)" }}
          contentStyle={{
            background: "#111827",
            borderRadius: "8px",
            border: "none",
            color: "#fff",
            fontSize: "13px",
          }}
        />

        <Bar
          dataKey="count"
          barSize={10}
          radius={[6, 6, 0, 0]}
          fill="url(#barGradient)"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

  );
}
