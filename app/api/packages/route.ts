import { NextResponse } from "next/server";
import { connectDB } from "../../mongodb";
import Package from "../../models/Package";

import { Params } from "next/dist/server/request/params";

export async function GET() {
  try {
    await connectDB();

    const packages = await Package.find().sort({ createdAt: -1 });

    return NextResponse.json(packages, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/packages ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch packages",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Optional: validate body fields
    if (!body.name || !body.price || !body.duration) {
      return NextResponse.json(
        { error: "Name, price, and duration are required" },
        { status: 400 }
      );
    }

    const pkg = await Package.create(body);
    return NextResponse.json(pkg, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/packages ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to create package",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
