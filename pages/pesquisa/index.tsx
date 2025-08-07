"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { ReturnRequestDataMedicineStore } from "@/types/components/pesquisa";

import CartComponent from "@/components/pesquisa/cart";
import TableCartComponent from "@/components/pesquisa/table-cart";
import { ReceiveMedicineStore } from "@/functions/pesquisa";
import LoadingPage from "@/components/geral/loading/page";

export default function Pesquisa() {
  const [Medicine, setMedicine] = useState<ReturnRequestDataMedicineStore>();
  const params = useSearchParams();
  const lote = params.get("lote") as string;

  useEffect(() => {
    if (!lote || lote == null) return;

    ReceiveMedicineStore({ lote, setMedicine });
  }, [lote]);

  function ViewCart() {
    "use client";

    return (
      <>
        {Medicine ? (
          <CartComponent server={Medicine.server} />
        ) : (
          <LoadingPage title="Estamos pesquisando o seu medicamento... 💊" />
        )}
        {Medicine ? <TableCartComponent server={Medicine.server} /> : null}
      </>
    );
  }

  return (
    <>
      <ViewCart />
    </>
  );
}
