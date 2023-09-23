import bcrypt from 'bcryptjs';

import { signJwtAccessToken } from '_helpers/client/jwt';
import db from '_helpers/server/database';

export async function POST(req: Request) {
  type RequestType = {
    username: string;
    password: string;
  };

  const body = (await req.json()) as RequestType;

  const user = await db.user.findUnique({
    where: {
      username: body.username,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user;

    const token = signJwtAccessToken(userWithoutPassword);
    const result = {
      ...userWithoutPassword,
      token,
    };

    return new Response(JSON.stringify(result));
  } else {
    return new Response(JSON.stringify(null));
  }
}
