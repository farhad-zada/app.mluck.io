import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mluck",
  description: "Mluck",
  icons: ["/assets/mluckfavicons-01.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.variable} antialiased bg-[url('/assets/bg-main.svg')] min-h-screen bg-contain bg-repeat-y bg-top`}>{children}</body>
    </html>
  );
}
