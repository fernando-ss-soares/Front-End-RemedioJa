// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ReturnErrorServerData } from "@/types/api/medicine";
import { getLoteMedicineStore } from "@/functions/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnErrorServerData>
) {
  const { query, method } = req;

  const lote = query.lote as string;

  if (method == "GET") {
    const { data, status } = await getLoteMedicineStore({
      lote: lote,
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
