import { ReturnRequestDataMedicineStore } from "@/types/components/pesquisa";
import Image from "next/image";

export default function CartComponent({ Medicine }: { Medicine: ReturnRequestDataMedicineStore | any }) {
    return (
        <>
        <section className="py-8 bg-violetCustom md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src={Medicine?.server.message[0].images[0]}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {Medicine?.server.message[0].images.map((data: string | Blob | undefined, index: any) => (
                    <div key={`${data}_${index}`}>
                      <Image className="h-auto max-w-full rounded-lg"
                        src={data as string}
                        width={100}
                        height={100}
                        alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-white sm:text-2xl">
                {Medicine?.server.message[0].title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  R$ {Medicine?.server.message[0].value}
                </p>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <a href={Medicine?.server.message[0].link} target="_blank">
                  <button
                    type="button"
                    className="text-white shadow bg-black hover:bg-black focus:ring-4 focus:bg-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
                  >
                    Comprar
                  </button>
                </a>
              </div>

              <hr className="my-6 md:my-8 border-gray-200" />

              <p className="mb-6 text-white">
                {Medicine?.server.message[0].description.substring(0, 700)}
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}