import { NextResponse } from "next/server";
import { executeTrade } from "@/executionEngine";

export async function POST() {
  return NextResponse.json(
    await executeTrade()
  );
}
