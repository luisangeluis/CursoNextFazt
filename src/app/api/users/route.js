import { NextResponse } from "next/server";

export const GET = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return NextResponse.json({ data });
};
export const POST = () => NextResponse.json({ message: "POST method" });
export const PUT = () => NextResponse.json({ message: "PUT method" });
export const DELETE = () => NextResponse.json({ message: "DELETE method" });
