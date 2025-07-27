// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ReturnErrorServerData } from "@/types/api/medicine";
import { medicineStore } from "@/functions/api";

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

