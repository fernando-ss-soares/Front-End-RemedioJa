interface ServerActionResponseGetLote {
  server: Server;
}

interface Server {
  message: Message;
}

interface Message {
  loteMedicine: LoteMedicine[];
  requestId: string;
}

type LoteMedicine = {
  _id: string;
  title: string;
  description: string;
  value: number;
  images: string[];
  link: string;
  date: string;
};

export type { ServerActionResponseGetLote };
