import db from '_helpers/server/database';

export async function GET(_: Request, { params: { id } }: any) {
  try {
    const hanuri = await db.hanuri.findUnique({
      where: { id },
    });

    if (!hanuri) {
      return new Response(
        JSON.stringify({ message: '해당 게시글이 없습니다.' }),
      );
    }

    return new Response(JSON.stringify(hanuri));
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}
