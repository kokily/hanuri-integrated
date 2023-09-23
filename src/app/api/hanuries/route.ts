import db from '_helpers/server/database';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const year = url.searchParams.get('year') ?? '';
  const cursor = (url.searchParams.get('cursor') as string) ?? '';
  const cursorObj = cursor === '' ? undefined : { id: cursor };
  const limit = 10;

  try {
    const hanuries = await db.hanuri.findMany({
      where: {
        year: {
          contains: year,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return new Response(JSON.stringify(hanuries));
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}
