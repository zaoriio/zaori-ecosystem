import { NextResponse } from "next/server";
import { createIntent } from "@/intentEngine";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json(
    await createIntent(body)
  );
}
