'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { ReturnRequestDataMedicineStore } from "@/types/components/pesquisa";

import CartComponent from "@/components/pesquisa/cart";
import TableCartComponent from "@/components/pesquisa/table-cart";
import { ReceiveMedicineStore } from "@/functions/pesquisa";

export default function Pesquisa() {
  const [Medicine, setMedicine] = useState<ReturnRequestDataMedicineStore>();
  const params = useSearchParams();
  const lote = params.get("lote") as string;

  useEffect(() => {
    if (!lote || lote == null) return;

    ReceiveMedicineStore({ lote, setMedicine });
  }, [lote]);

  return (
    <>
      <Suspense fallback={<div className="text-white">Carregando...</div>}>
          {Medicine?.server && <CartComponent server={Medicine.server} />}
          {Medicine?.server && <TableCartComponent server={Medicine.server} />}  
      </Suspense>
    </>
  );
}
