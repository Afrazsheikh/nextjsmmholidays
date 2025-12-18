import { NextResponse } from "next/server";
import { connectDB } from "../../../mongodb";
import Package from "../../../models/Package";

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
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // 👈 THIS IS THE FIX

  console.log("DELETE route hit, id:", id);

  try {
    await connectDB();

    const deleted = await Package.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Package deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to delete package", message: error.message },
      { status: 500 }
    );
  }
}

/* ===================== UPDATE PACKAGE ===================== */
export async function PUT(req: Request, { params }: any) {
  try {
    await connectDB();
    const body = await req.json();

    const updated = await Package.findByIdAndUpdate(params?.id, body, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update package", message: error.message },
      { status: 500 }
    );
  }
}
