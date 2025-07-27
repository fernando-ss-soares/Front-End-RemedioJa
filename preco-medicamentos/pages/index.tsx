'use client'
import CustomerLogoComponent from "@/components/customer-logos";
import HeaderComponent from "@/components/header";
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
