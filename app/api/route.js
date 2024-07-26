import { NextResponse } from 'next/server';
import protestersData from '../../public/protesters/all-protesters.json';

export async function GET(request) {
  try {
    const count = protestersData.length;
    const response = {
      count,
      data: protestersData
    }
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
