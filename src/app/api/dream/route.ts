import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
    const { imageUrl, theme, room } = await req.json();
    

    const output = await replicate.run(
      "alaradirik/t2i-adapter-sdxl-depth-midas:3263801326d7bf368327b89980371f634086e6bbbf734d9a2943cb516dd8209d",
      {
        input: {
          image: imageUrl,
          prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed`,
        },
      }
    );


    return NextResponse.json(output);

}