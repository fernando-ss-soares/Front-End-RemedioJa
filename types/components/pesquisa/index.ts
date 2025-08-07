interface ReturnRequestDataMedicineStore {
  server: Server;
}

interface Server {
  message: LoteMedicine;
  requestId: string;
}

interface LoteMedicine {
  loteMedicine: Message[];
}

interface Message {
  _id: string;
  title: string;
  description: string;
  value: number;
  images: string[];
  link: string;
  date: string;
}

export type {
    ReturnRequestDataMedicineStore,
    Message
}