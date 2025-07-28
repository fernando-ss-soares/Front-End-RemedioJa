'use client';

import CustomerLogoComponent from "@/components/customer-logos";
import HeroComponent from "@/components/hero";

export default function Home() {
  return (
    <>
      <div className="bg-backgroundSecondCustom">
        <HeroComponent />
        <CustomerLogoComponent />
      </div>
    </>
  );
}
