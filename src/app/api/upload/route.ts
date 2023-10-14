import { writeFile } from 'fs/promises';
import moment from 'moment';

export async function POST(req: Request) {
  const data = await req.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return new Response(JSON.stringify({ message: '파일을 업로드 해주세요' }));
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const prevFilename = file.name.replaceAll('_', '');
  const fileName = `${moment().format('YYYYMMDDHHmmdd')}${prevFilename.trim()}`;
  const path = `${process.cwd()}/uploads/${fileName}`;

  await writeFile(path, buffer);

  console.log(`Open ${fileName} to see the uploaded file`);

  return new Response(
    JSON.stringify({
      url: `uploads/${fileName}`,
    }),
  );
}
