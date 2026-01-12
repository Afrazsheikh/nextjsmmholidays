import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../mongodb";
import Package from "../../models/Package";

import { Params } from "next/dist/server/request/params";

// export async function GET() {
//   try {
//     await connectDB();

//     const packages = await Package.find().sort({ createdAt: -1 });

//     return NextResponse.json(packages, { status: 200 });
//   } catch (error: any) {
//     console.error("GET /api/packages ERROR:", error);

//     return NextResponse.json(
//       {
//         error: "Failed to fetch packages",
//         message: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

export async function GET(req: NextRequest) {
  try {
    console.log("📦 API HIT");

    await connectDB();
    console.log("✅ DB CONNECTED");

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 6;
    const skip = (page - 1) * limit;

    console.log({ page, limit, skip });

    const total = await Package.countDocuments();
    console.log("📊 TOTAL PACKAGES:", total);

    const packages = await Package.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    console.log("📦 FETCHED:", packages.length);

    return NextResponse.json({
      packages,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error("❌ API ERROR:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    console.log(body);

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
