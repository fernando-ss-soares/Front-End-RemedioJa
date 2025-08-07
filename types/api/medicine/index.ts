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

interface ParametersFunctionGetLoteMedicineStore {
  lote: string;
}

export type {
  ReturnErrorServerData,
  ParametersFunctionMedicineStore,
  ParametersFunctionGetLoteMedicineStore,
};
