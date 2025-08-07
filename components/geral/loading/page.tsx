import Loading from ".";

interface Props {
  statusCode?: number | string;
  title: string;
  message?: string;
}

export default function LoadingPage({ message, title }: Props) {
  return (
    <>
      <section className="bg-backgroundSecondCustom h-screen flex flex-col items-center justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="flex flex-col items-center justify-center mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              <Loading className="w-40 h-20" />
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
              {title}
            </p>
            <p className="mb-4 text-lg font-light text-white">{message}</p>
          </div>
        </div>
      </section>
    </>
  );
}
