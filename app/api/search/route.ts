import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.toLowerCase() || "";

    if (!q) {
      return NextResponse.json([]);
    }

    const filePath = path.join(process.cwd(), "public", "packages.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);

    const filtered = data.packages.filter((pkg: any) =>
      pkg.name.toLowerCase().includes(q)
    );

    return NextResponse.json(filtered.slice(0, 10));
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
