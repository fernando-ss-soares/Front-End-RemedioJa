import {
  Message,
  ReturnRequestDataMedicineStore,
} from "@/types/components/pesquisa";

export default function TableCartComponent({
  server,
}: ReturnRequestDataMedicineStore) {
  return (
    <>
      <section className="bg-gray-50 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-4">
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <h2 className="text-black font-medium">
                  Lista de Medicamentos
                </h2>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Nome
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Preço
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Acesso
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {server.message.loteMedicine.map(
                    ({
                      _id,
                      link,
                      title,
                      value,
                    }: Message) => (
                      <>
                        <tr key={_id} className="border-b">
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {title}
                          </th>
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {value == null ? "Não encontrado" : "R$ " + value}
                          </th>
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                          >
                            <a href={link} target="_blank">
                              <button
                                type="button"
                                className="text-white bg-violetCustom hover:bg-violetCustom focus:ring-4 focus:ring-violetCustom font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
                              >
                                Acessar
                              </button>
                            </a>
                          </th>
                        </tr>
                      </>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500">
                Showing
                <span className="font-semibold text-gray-900">1-10</span>
              </span>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
