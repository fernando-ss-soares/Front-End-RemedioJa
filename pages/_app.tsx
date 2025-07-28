import HeaderComponentV2 from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeaderComponentV2>
      <Component {...pageProps} />
    </HeaderComponentV2>
  )
}
