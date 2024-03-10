import db from '_helpers/server/database';

export async function PATCH(req: Request, { params: { id } }: any) {
  type RequestType = {
    title: string;
    body: string;
    tags: string[];
    thumbnail: string;
    year: string;
  };

  const body = (await req.json()) as RequestType;

  try {
    const hanuri = await db.hanuri.update({
      where: { id },
      data: {
        title: body.title,
        body: body.body,
        tags: body.tags,
        thumbnail: body.thumbnail,
        year: body.year,
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify(hanuri));
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}
