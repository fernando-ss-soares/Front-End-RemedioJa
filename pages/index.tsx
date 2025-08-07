"use client";

import CustomerLogoComponent from "@/components/principal/customer";
import HeroComponent from "@/components/principal/hero";

export default function Home() {
  return (
    <>
      <section className="bg-backgroundSecondCustom">
        <HeroComponent />
        <CustomerLogoComponent />
      </section>
    </>
  );
}
