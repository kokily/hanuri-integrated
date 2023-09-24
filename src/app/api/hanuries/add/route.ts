import db from '_helpers/server/database';

export async function POST(req: Request) {
  type RequestType = {
    title: string;
    body: string;
    tags: string[];
    thumbnail: string;
    year: string;
  };

  const body = (await req.json()) as RequestType;

  try {
    const hanuri = await db.hanuri.create({
      data: {
        title: body.title,
        body: body.body,
        tags: body.tags,
        thumbnail: body.thumbnail,
        year: body.year,
      },
    });

    return new Response(JSON.stringify(hanuri));
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}
