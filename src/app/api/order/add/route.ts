import { NextRequest, NextResponse } from 'next/server';
import db from '_helpers/server/database';

export async function POST(req: NextRequest) {
  const payload = (await req.json()) as AddOrderType;

  try {
    const order = await db.order.create({
      data: {
        ...payload,
      },
    });

    return NextResponse.json(order);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
