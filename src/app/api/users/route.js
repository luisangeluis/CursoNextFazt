import { NextResponse } from "next/server";

export const GET = async () => {
  const response = await fetch(`${process.env.PLACEHOLDER_API}/users`);
  const data = await response.json();
  return NextResponse.json({ data });
};

export const POST = async(request) => {
  const data = await request.json();

  console.log({data});

  return NextResponse.json({ message: "POST method" });
}

export const PUT = () => NextResponse.json({ message: "PUT method" });
export const DELETE = () => NextResponse.json({ message: "DELETE method" });
