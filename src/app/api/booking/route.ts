import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "booking.json");

// ✅ Ensure the file and folder exist before reading/writing
function ensureFile() {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ count: 0 }, null, 2));
  }
}

// ✅ GET — get booking counter
export async function GET() {
  try {
    ensureFile(); 
    const fileData = fs.readFileSync(filePath, "utf-8");
    const { count } = JSON.parse(fileData);
    return NextResponse.json({ count });
  } catch (error) {
    console.error("❌ Error reading booking data:", error);
    return NextResponse.json(
      { error: "Failed to read booking data" },
      { status: 500 }
    );
  }
}

// ✅ POST — update booking counter
export async function POST(request:Request) {
  try {
    ensureFile(); 
    const body = await request.json();
    const { count } = body;

    if (typeof count !== "number" || count < 0) {
      return NextResponse.json(
        { error: "Invalid count value" },
        { status: 400 }
      );
    }

    fs.writeFileSync(filePath, JSON.stringify({ count }, null, 2));

    return NextResponse.json({ success: true, count });
  } catch (error) {
    console.error("❌ Error updating booking count:", error);
    return NextResponse.json(
      { error: "Failed to update booking count" },
      { status: 500 }
    );
  }
}
