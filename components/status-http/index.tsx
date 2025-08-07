import Link from "next/link";

interface Props {
  statusCode: number;
  title: string;
  message: string;
}

export default function StatusHttpPage({ message, statusCode, title }: Props) {
  return (
    <>
      <section className="bg-backgroundSecondCustom h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              {statusCode}
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
              {title}
            </p>
            <p className="mb-4 text-lg font-light text-white">{message}</p>
            <Link href={"/"}>
              <button className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-violetCustom rounded-lg border hover:bg-violetCustom focus:ring-4 focus:outline-none focus:violetCustom">
                <div role="status">
                  Voltar
                  <span className="sr-only">Voltar</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
