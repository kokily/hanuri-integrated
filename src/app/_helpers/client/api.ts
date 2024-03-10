import qs from 'qs';
import client from './client';

export async function listHanuriesAPI(queries: ListHanuriesQuery) {
  const queryString = qs.stringify(queries);
  const response = await client.get<Array<HanuriType>>(
    `/hanuries?${queryString}`,
  );

  return response.data;
}

export async function addHanuriAPI(payload: AddHanuriPayload) {
  const response = await client.post<HanuriType>(`/hanuries/add`, payload);
  return response.data;
}

export async function readHanuriAPI(id: string) {
  const response = await client.get<HanuriType>(`/hanuries/${id}`);
  return response.data;
}

export async function updateHanuriAPI({
  id,
  payload,
}: {
  id: string;
  payload: AddHanuriPayload;
}) {
  const response = await client.patch<HanuriType>(
    `/hanuries/update/${id}`,
    payload,
  );
  return response.data;
}
