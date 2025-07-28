export default function HeroComponent() {
  return (
    <>
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Remédio Barato: Compare Preços e Economize!
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-200">
              Não pague mais caro! Com o Remédio Barato, você pesquisa e compara
              os preços de medicamentos em diversas farmácias da sua região,
              encontrando sempre a melhor oferta. Economize tempo e dinheiro na
              hora de cuidar da sua saúde. É rápido, fácil e grátis!
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/medicine.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}
