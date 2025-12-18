import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "../../../mongodb";
import Package from "../../../models/Package";

/* ===================== GET ===================== */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params; // ✅ FIX

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const pkg = await Package.findById(id);

    if (!pkg) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(pkg, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to fetch package", message: err.message },
      { status: 500 }
    );
  }
}

/* ===================== PUT ===================== */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params; // ✅ FIX
    const body = await request.json();

    const updated = await Package.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to update package", message: err.message },
      { status: 500 }
    );
  }
}

/* ===================== DELETE ===================== */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params; // ✅ FIX
    console.log("DELETE id:", id);

    const deleted = await Package.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to delete package", message: err.message },
      { status: 500 }
    );
  }
}
