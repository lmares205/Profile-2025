export { metadata } from './layout.metadata';
import "./globals.css";
import Header from "@/components/header/Header";
import MyStatsig from "./statsig";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <MyStatsig>{children}</MyStatsig>
      </body>
    </html>
  );
}
