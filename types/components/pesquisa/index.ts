interface ReturnRequestDataMedicineStore {
  server: Server;
}

interface Server {
  message: Message[];
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
    ReturnRequestDataMedicineStore
}