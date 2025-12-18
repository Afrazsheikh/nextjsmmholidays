import { NextResponse } from "next/server";
import { connectDB } from "../../../mongodb";
import Package from "../../../models/Package";
import mongoose from "mongoose";

interface RouteParams {
  params: {
    id: string;
  };
}

/* ===================== GET SINGLE PACKAGE ===================== */
export async function GET(req: Request, { params }: RouteParams) {
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const pkg = await Package.findById(params.id);

    if (!pkg) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(pkg, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch package", message: error.message },
      { status: 500 }
    );
  }
}

/* ===================== UPDATE PACKAGE ===================== */
export async function PUT(req: Request, { params }: RouteParams) {
  try {
    await connectDB();

    const body = await req.json();

    const updated = await Package.findByIdAndUpdate(params.id, body, {
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

/* ===================== DELETE PACKAGE ===================== */
export async function DELETE(req: Request, { params }: RouteParams) {
  try {
    await connectDB();

    const deleted = await Package.findByIdAndDelete(params.id);

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
