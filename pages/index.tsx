'use client';

import CustomerLogoComponent from "@/components/customer-logos";
import HeroComponent from "@/components/hero";

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
