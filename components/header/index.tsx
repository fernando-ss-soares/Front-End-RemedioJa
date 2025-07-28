import { useFormStatus } from "react-dom";
import { useRouter } from "next/router";
import Link from 'next/link'

import { SearchMedicine } from "@/actions";
import { ParametersHeaderComponent } from "@/types/components/header";
import BannerComponent from "../banner";

export default function HeaderComponentV2({
  children,
}: ParametersHeaderComponent) {
  const router = useRouter();

  async function Data(formData: FormData) {
    const { lote, status } = await SearchMedicine(formData);

    if (status === 200) {
      router.push(`/pesquisa?lote=${lote}`);
    } else {
      router.push(`/naoencotradonenhumproduto`);
    }

  }

  function Submit() {
    const statusForm = useFormStatus();

    const status = statusForm.pending;

    return status ? (
      <button
        disabled={status}
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-violetCustom rounded-lg border bg-violetCustom hover:bg-violetCustom focus:ring-4 focus:outline-none focus:violetCustom"
      >
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-16 h-5 text-gray-200 animate-spin fill-violetCustom"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </button>
    ) : (
      <button
        disabled={status}
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-violetCustom rounded-lg border bg-violetCustom hover:bg-violetCustom focus:ring-4 focus:outline-none focus:violetCustom"
      >
        Pesquisar
      </button>
    );
  }

  return (
    <>
      <nav className="bg-white antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-center md:items-center md:justify-between">
            <div className="flex items-center space-x-8 m-5">
              <div className="shrink-0">
                <Link href={'/'} className="flex">
                    <img
                    className="block w-auto h-8 mx-1"
                    src="/drug.svg"
                    alt=""
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
                    RemédioJá
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center lg:space-x-2">
              <form
                action={Data}
                className="flex items-center max-w-lg mx-auto"
              >
                <label htmlFor="voice-search" className="sr-only">
                  Pesquisar
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        className="text-gray-500"
                        d="M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112-96 0 0-112zm-64 0l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-105.8 116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3c-35.5-51.7-105.3-64.3-156-28.1-5.6 4-10.7 8.4-15.3 13.1l0-18.3C256 50.1 205.9 0 144 0S32 50.1 32 112zM296.6 240.2c-16-23.3-10-55.3 11.9-71 21.2-15.1 50.5-10.3 66 12.2l67 97.6-79.9 55.9-65-94.8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    name="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder="Medicamentos..."
                    required
                  />
                </div>
                <Submit />
              </form>
            </div>
          </div>
        </div>
        <BannerComponent />
        {children}
      </nav>
    </>
  );
}
