import { NextRequest, NextResponse } from 'next/server';
import db from '_helpers/server/database';

export async function DELETE(_: NextRequest) {
  try {
    const order = await db.order.findFirst();

    if (!order) {
      return NextResponse.json(
        { error: '데이터가 없습니다.' },
        { status: 404 },
      );
    }

    await db.order.delete({ where: { id: order.id } });

    return NextResponse.json({ message: '주문 삭제' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
