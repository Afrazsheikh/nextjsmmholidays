import { NextResponse } from "next/server";
import { connectDB } from "../../../mongodb";
import Analytics from "../../../models/Analytics";

export async function GET() {
  await connectDB();

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const data = await Analytics.aggregate([
    {
      $match: {
        type: "callback", // 🔁 change to "view" if needed
        createdAt: { $gte: startOfMonth },
      },
    },
    {
      $group: {
        _id: {
          day: { $dayOfMonth: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { "_id.day": 1 },
    },
    {
      $project: {
        _id: 0,
        day: "$_id.day",
        count: 1,
      },
    },
  ]);

  return NextResponse.json(data);
}
