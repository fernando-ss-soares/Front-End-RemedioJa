"use server";

import axios from "axios";


async function SearchMedicine(formData: FormData) {

  const rawFormData = {
    medidine: formData.get("voice-search"),
  };

  const { data, status } = await axios.get(
    `/api/medicine?product=${rawFormData.medidine}`
  );

  const lote = data?.server?.message?.lote as string;

  return { status: status, lote: lote }
}

async function SearchLoteMedicine() {}

export { SearchMedicine, SearchLoteMedicine };
