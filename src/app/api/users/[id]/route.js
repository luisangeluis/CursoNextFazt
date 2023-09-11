import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  console.log({ params });
  const { searchParams } = new URL(request.url);
  // console.log(searchParams);
  console.log(searchParams.get("nombre"));

  const response = await fetch(`${process.env.PLACEHOLDER_API}/users/${params.id}`);
  const data = await response.json();
  return NextResponse.json(data);
};
