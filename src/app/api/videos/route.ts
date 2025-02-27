import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const videosDirectory = path.join(process.cwd(), "public/videos");
  try {
    const files = fs.readdirSync(videosDirectory);
    const videos = files
      .filter((file) => file.endsWith(".webm"))
      .map((file) => ({
        id: file.replace(".webm", ""),
        src: `videos/${file}`,
        type: "video/webm",
      }));
    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error reading videos directory:", error);
    return NextResponse.json([], { status: 500 });
  }
}
