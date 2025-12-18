import { NextResponse } from "next/server";
import { connectDB } from "../../mongodb"; // your Mongoose connect function
import Package from "../../models/Package"; // Mongoose model for your packages

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.toLowerCase() || "";

    if (!q) return NextResponse.json([]);

    // Connect to MongoDB via Mongoose
    await connectDB();

    // Search packages (case-insensitive)
    const results = await Package.find({
      name: { $regex: q, $options: "i" },
    })
      .limit(10)
      .lean(); // lean() returns plain JS objects

    // Format _id to string
    const formatted = results.map((pkg) => ({
      id: pkg._id.toString(),
      name: pkg.name,
      price: pkg.price,
      offerPrice: pkg.offerPrice,
      duration: pkg.duration,
      imageUrl: pkg.imageUrl,
      desc: pkg.desc,
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error("Search API error:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
