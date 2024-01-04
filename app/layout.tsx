import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surewin",
  description: "Surewin"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
