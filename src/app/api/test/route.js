
import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    message: 'Hello, world!',
    date: new Date().toISOString(),
    status: 'success',
  };

  return NextResponse.json(data);
}
