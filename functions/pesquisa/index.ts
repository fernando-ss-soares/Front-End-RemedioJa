import { SearchLoteMedicine } from "@/actions";
import { ReturnRequestDataMedicineStore } from "@/types/components/pesquisa";
import router from "next/router";
import { Dispatch, SetStateAction } from "react";

interface Props {
  lote: string;
  setMedicine: Dispatch<
    SetStateAction<ReturnRequestDataMedicineStore | undefined>
  >;
}

async function ReceiveMedicineStore({ lote, setMedicine }: Props) {
  const { data, status } = await SearchLoteMedicine({ lote: lote });

  if (status === 200) {
    setMedicine(data);
  } else {
    router.push("/404");
  }
}

export { ReceiveMedicineStore };
