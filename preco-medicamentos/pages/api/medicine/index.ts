// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ParametersFunctionMedicineStore, ReturnErrorServerData } from "../../../types/api/medicine/index.ts";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnErrorServerData>
) {
  const { query, method } = req;

  if (method == "GET") {
    const { data, status } = await medicineStore({
      query: { product: query.product as string },
    });

    const response =
      status == 400
        ? res.status(400).json({
            server: {
              message: "Erro ao processar a requisição.",
            },
          })
        : res.status(200).json({
            server: {
              message: data,
            },
          });

    return response;
  }

  res.status(400).json({
    server: {
      message: "Erro ao processar a requisição.",
    },
  });
}
