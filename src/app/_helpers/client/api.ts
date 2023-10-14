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
