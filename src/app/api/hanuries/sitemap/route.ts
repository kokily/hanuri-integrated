import { NextRequest, NextResponse } from 'next/server';

import db from '_helpers/server/database';

export async function POST(_: NextRequest) {
  try {
    const sitemaps = await db.hanuri.findMany();

    return NextResponse.json(sitemaps);
  } catch (err: any) {
    return NextResponse.json({ message: err.message });
  }
}
