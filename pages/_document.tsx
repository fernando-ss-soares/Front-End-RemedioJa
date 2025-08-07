import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta
          property="twitter:image"
          content="https://front-end-preco-medicamentos.vercel.app/drug.svg"
        ></meta>
        <meta
          property="twitter:card"
          content="https://front-end-preco-medicamentos.vercel.app/drug.svg"
        ></meta>
        <meta property="twitter:title" content="RemédioJá"></meta>
        <meta
          property="twitter:description"
          content="O aplicativo que te ajuda a economizar com os médicamentos"
        ></meta>
        <meta property="description" content="RemédioJá, Me" />
        <meta
          property="og:image"
          content="https://front-end-preco-medicamentos.vercel.app/drug.svg"
        ></meta>
        <meta property="og:site_name" content="RemédioJá"></meta>
        <meta property="og:title" content="RemédioJá"></meta>
        <meta
          property="og:description"
          content="O aplicativo que te ajuda a economizar com os médicamentos"
        />
        <meta
          property="og:url"
          content="https://front-end-preco-medicamentos.vercel.app/"
        ></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          async
        />
      </body>
    </Html>
  );
}
