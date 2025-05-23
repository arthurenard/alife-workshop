import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const videosDirectory = path.join(process.cwd(), "public/videos");
  try {
    const files = fs.readdirSync(videosDirectory);
    const videos = files
      .filter((file) => {
        // Only include files (not directories) and filter to video formats
        const filePath = path.join(videosDirectory, file);
        return fs.statSync(filePath).isFile() && (file.endsWith(".webm") || file.endsWith(".mp4"));
      })
      .map((file) => {
        const fileType = file.endsWith(".mp4") ? "video/mp4" : "video/webm";
        const fileId = file.replace(/\.(webm|mp4)$/, "");
        
        return {
          id: fileId,
          src: `videos/${file}`,
          type: fileType,
        };
      });
    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error reading videos directory:", error);
    return NextResponse.json([], { status: 500 });
  }
}
