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

  return { status: status, lote: lote };
}

async function SearchLoteMedicine({ lote }: { lote: string }) {
  const { data, status } = await axios.get(`/api/getlote?lote=${lote}`);

  return { status: status, data: data };
}

export { SearchMedicine, SearchLoteMedicine };
