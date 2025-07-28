'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import router from "next/router";

import { SearchLoteMedicine } from "@/actions";
import { ReturnRequestDataMedicineStore } from "@/types/components/pesquisa";

import CartComponent from "@/components/cart";
import TableCartComponent from "@/components/table-cart";
import Loading from "./loading";

export default function Pesquisa() {
  const [Medicine, setMedicine] = useState<ReturnRequestDataMedicineStore>();
  const params = useSearchParams();
  const lote = params.get("lote") as string;

  useEffect(() => {
    if (!lote || lote == null) return;

    async function ReceiveMedicineStore({ lote }: { lote: string }) {
      const { data, status } = await SearchLoteMedicine({ lote: lote });

      if (status === 200) {
        setMedicine(data);
      } else {
        router.push("/naoencotradonenhumproduto");
      }
    }

    ReceiveMedicineStore({ lote: lote });
  }, [lote]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <CartComponent Medicine={Medicine} />
        <TableCartComponent Medicine={Medicine} />
      </Suspense>
    </>
  );
}
