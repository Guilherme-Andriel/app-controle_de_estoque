import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  variable: "--font-Poppins-sans",  
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],              
});




export const metadata: Metadata = {
  title: "Controle de Estoque",
  description: "Sistema eficiente de controle de estoque para entradas e saídas de produtos. Gerencie categorias, quantidades e valores em tempo real com uma interface intuitiva e organizada.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="pt-br">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
