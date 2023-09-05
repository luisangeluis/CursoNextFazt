import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await response.json();
  return NextResponse.json(data);
};
