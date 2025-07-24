interface ReturnErrorServerData {
  server: ReturnErrorServer;
}

type ReturnErrorServer = {
  message: string;
};

interface ParametersFunctionMedicineStore {
  query: ObjectQuery;
}

type ObjectQuery = {
  product: string;
};

export type {
    ReturnErrorServerData,
    ParametersFunctionMedicineStore
}