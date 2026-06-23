import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRC Advogados | Advocacia Empresarial",
  description: "Escritório especializado em Direito Empresarial. Soluções preventivas, consultivas e contenciosas de alto padrão para empresas nacionais e internacionais.",
  keywords: "advocacia empresarial, direito empresarial, advogados são paulo, consultoria jurídica, direito tributário",
  authors: [{ name: "DRC Advogados" }],
  creator: "DRC Advogados",
  publisher: "DRC Advogados",
  robots: "index, follow",
  openGraph: {
    title: "DRC Advogados | Advocacia Empresarial",
    description: "Parceria estratégica com excelência jurídica e resultados assertivos.",
    type: "website",
    locale: "pt_BR",
    siteName: "DRC Advogados",
  },
  twitter: {
    card: "summary_large_image",
    title: "DRC Advogados | Advocacia Empresarial",
    description: "Parceria estratégica com excelência jurídica e resultados assertivos.",
  },
  alternates: {
    canonical: "https://drcadvogados.com.br",
  },
  verification: {
    google: "seu-codigo-aqui",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" dir="ltr">
      <body className="antialiased bg-[#F8F4EC] text-[#222222]">
        {children}
      </body>
    </html>
  );
}
