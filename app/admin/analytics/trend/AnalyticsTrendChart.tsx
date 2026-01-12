"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useEffect, useState } from "react";
import styles from "./AnalyticsChart.module.css";

type TrendData = {
  day: number;
  count: number;
};

export default function AnalyticsTrendChart() {
  const [data, setData] = useState<TrendData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/analytics/trend")
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading trend...</p>;
  if (data.length === 0) return <p>No trend data</p>;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        📈 Callback Trend (This Month)
      </h3>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              label={{ value: "Day", position: "insideBottom", offset: -5 }}
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              allowDecimals={false}
            />

            <Tooltip
              contentStyle={{
                background: "#111827",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
