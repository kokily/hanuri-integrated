interface AddHanuriPayload {
  title: string;
  body: string;
  tags: string[];
  thumbnail: string;
  year: string;
}

interface ListHanuriesQuery {
  year: string;
  cursor?: string;
}

interface HanuriType {
  id: string;
  title: string;
  body: string;
  tags: string[];
  year: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

interface AddOrderType {
  username: string;
  divide: string;
  product: string;
  tempo: string;
}

interface OrderType {
  id: string;
  username: string;
  divide: string;
  product: string;
  tempo: string;
  createdAt: string;
}
