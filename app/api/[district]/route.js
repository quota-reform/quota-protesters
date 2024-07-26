import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { district } = params;

  try {
    const data = await fetch(`${request.nextUrl.origin}/protesters/${district}/protesters.json`);
    if (!data.ok) {
      return NextResponse.json({ error: 'District not found' }, { status: 404 });
    }

    const protesters = await data.json();
    const count = protesters.length;
    const response = {
      count,
      data: protesters
    }
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
