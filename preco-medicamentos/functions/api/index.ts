import { ParametersFunctionMedicineStore } from "@/types/api/medicine";
import axios from "axios";

async function medicineStore({ query }: ParametersFunctionMedicineStore) {
  const queryMedicine = query?.product;

  const response = await axios.post(
    `http://localhost:9558/health/medicine/searchMedicine?store=araia&product=${queryMedicine}`,
    {},
    {
      headers: {
        Authorization:
          "Bearer fBbxYvh5BvG2TCkm7OoWwPHx9bz4lQKoUpBFEzGv6PHtwcUKVUTss6XIDTDs8Xy2",
      },
    }
  );

  return response;
}

export {
    medicineStore,
}