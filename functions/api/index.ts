import { ParametersFunctionGetLoteMedicineStore, ParametersFunctionMedicineStore } from "@/types/api/medicine";
import axios from "axios";

async function medicineStore({ query }: ParametersFunctionMedicineStore) {
  const queryMedicine = query?.product;

  const response = await axios.post(
    `https://api-preco-medicamentos.fernando-ss-soares.deno.net/save/searchMedicine?store=araia&product=${queryMedicine}`,
    {},
    {
      headers: {
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_BFF_TOKEN}`,
      },
    }
  );

  return response;
}

async function getLoteMedicineStore({ lote }: ParametersFunctionGetLoteMedicineStore) {
  const response = await axios.post(
    `https://api-preco-medicamentos.fernando-ss-soares.deno.net/get/searchLote?lote=${lote}`,
    {},
    {
      headers: {
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_BFF_TOKEN}`,
      },
    }
  );

  return response;
}

export {
    medicineStore,
    getLoteMedicineStore
}