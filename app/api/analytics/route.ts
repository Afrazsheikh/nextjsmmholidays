import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../mongodb";
import Analytics from "../../models/Analytics";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("📊 ANALYTICS POST BODY:", body);

    const doc = await Analytics.create({
      packageId: body.packageId,
      type: body.type,
      userAgent: req.headers.get("user-agent"),
      ip: req.headers.get("x-forwarded-for") || "unknown",
    });

    console.log("✅ SAVED ANALYTICS:", doc);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ ANALYTICS ERROR:", err);
    return NextResponse.json({ error: "Analytics failed" }, { status: 500 });
  }
}
