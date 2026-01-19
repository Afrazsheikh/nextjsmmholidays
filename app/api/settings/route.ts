import { connectDB } from "../../mongodb";
import Settings from "../../models/Settings";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const settings = await Settings.findOne().lean();

  return NextResponse.json(settings || {});
}

export async function PUT(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    // Remove undefined / null fields (important)
    const cleanBody = Object.fromEntries(
      Object.entries(body).filter(
        ([_, value]) => value !== undefined && value !== null
      )
    );

    const updated = await Settings.findOneAndUpdate(
      {},
      { $set: cleanBody }, // merge new & existing fields
      {
        new: true,
        upsert: true,
        strict: false, // ✅ allow new fields not in schema
      }
    );

    return NextResponse.json(updated);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
