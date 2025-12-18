import { connectDB } from "../../mongodb";
import Settings from "../../models/Settings";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const settings = (await Settings.findOne()) || {};
  return NextResponse.json(settings);
}
export async function PUT(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const updated = await Settings.findOneAndUpdate({}, body, {
      new: true,
      upsert: true, // create if doesn't exist
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
