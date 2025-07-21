import { getPlaiceholder } from "plaiceholder";
import path from "path";
import fs from "node:fs/promises";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const src = req.nextUrl.searchParams.get("src");

  console.log("src:", src);

  if (!src) {
    return new Response(
      JSON.stringify({ error: "Image source not provided" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let buffer = null;

  if (src.startsWith("http")) {
    buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
  } else {
    const imagePath = path.join(process.cwd(), "public", src);
    buffer = await fs.readFile(imagePath);
  }

  const { base64 } = await getPlaiceholder(buffer);
  return new Response(JSON.stringify({ blurDataURL: base64 }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
