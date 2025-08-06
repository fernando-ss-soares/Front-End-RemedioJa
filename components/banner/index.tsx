export default function BannerComponent() {
  return (
    <>
      <div
        id="banner"
        tabIndex={-1}
        className="flex gap-8 justify-center items-start py-3 px-4 w-full bg-black border border-b border-black sm:items-center lg:py-4"
      >
        <p className="text-sm font-light text-center text-white">
          <a
            className="font-medium underline text-primary-600 hover:no-underline"
            href="https://github.com/fernando-ss-soares/Front-End-RemedioJa"
            target="_blank"
          >
            RemédioJá:
          </a>{" "}
          Desenvolva conosco e transforme o acesso a medicamentos!
        </p>
      </div>
    </>
  );
}
