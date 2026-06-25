import type { Metadata } from "next";
import "./globals.css";
import Meta from "@/components/Meta";

export const metadata: Metadata = {
  title: "Kaistudio.vn - Chuyên thiết kế và thi công các dự án nhà phố nhà phố.",
  description: "Thiết kế nhà phố, thiết kế biệt thự, thiết kế sân vườn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <head>
        <Meta />
      </head>
      <body className="min-h-full flex flex-col">
        <main className="mb-auto">{children}</main>
      </body>
    </html>
  );
}
