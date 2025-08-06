import { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RemédioJá',
  description: 'O melhor site de acesso a médicamentos baratos do Brasil',
  creator: "Fernando Soares",
  keywords: ["Brasil", "Medicamentos", "RémedioJá", "Remédio barato"],
  openGraph: {
    title: 'RemédioJá',
    description: 'O melhor site de acesso a médicamentos baratos do Brasil',
    url: 'https://front-end-preco-medicamentos.vercel.app',
    siteName: 'RemédioJá',
    images: [
      {
        url: 'https://front-end-preco-medicamentos.vercel.app/drug.svg', // Deve ser uma URL absoluta
        width: 1200,
        height: 630,
        alt: 'Imagem de destaque da Página Inicial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </Html>
  );
}
