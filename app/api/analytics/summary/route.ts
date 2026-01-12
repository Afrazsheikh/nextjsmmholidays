import { NextResponse } from "next/server";
import { connectDB } from "../../../mongodb";
import Analytics from "../../../models/Analytics";

export async function GET() {
  await connectDB();

  // 📅 Get start of current month
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const data = await Analytics.aggregate([
    {
      $lookup: {
        from: "packages",
        localField: "packageId",
        foreignField: "_id",
        as: "package",
      },
    },
    { $unwind: "$package" },
    {
      $group: {
        _id: {
          packageName: "$package.name",
          type: "$type",
        },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        packageName: "$_id.packageName",
        type: "$_id.type",
        count: 1,
      },
    },
  ]);

  return NextResponse.json(data);
}
