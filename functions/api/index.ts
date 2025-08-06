import {
  ParametersFunctionGetLoteMedicineStore,
  ParametersFunctionMedicineStore,
} from "@/types/api/medicine";
import axios from "axios";

async function medicineStore({ query }: ParametersFunctionMedicineStore) {
  const queryMedicine = query?.product;

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api-preco-medicamentos.fernando-ss-soares.deno.net/labs/medicine/save/searchMedicine?store=araia&product=${queryMedicine}`,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer fBbxYvh5BvG2TCkm7OoWwPHx9bz4lQKoUpBFEzGv6PHtwcUKVUTss6XIDTDs8Xy2",
    },
  };

  const response = await axios.request(config);

  return response;
}

async function getLoteMedicineStore({
  lote,
}: ParametersFunctionGetLoteMedicineStore) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api-preco-medicamentos.fernando-ss-soares.deno.net/labs/medicine/get/searchLote?lote=${lote}`,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer fBbxYvh5BvG2TCkm7OoWwPHx9bz4lQKoUpBFEzGv6PHtwcUKVUTss6XIDTDs8Xy2",
    },
  };

  const response = await axios.request(config);

  return response;
}

export { medicineStore, getLoteMedicineStore };
