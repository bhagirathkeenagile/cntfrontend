import "./globals.css";
import Header from "./dashboard/components/base/Header";
import Sidebar from "./dashboard/components/base/Sidebar";
import Footer from "./dashboard/components/base/footer";
import "ka-table/style.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contacts",
  description: "Contacts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          <main>{children}</main>
        </NextAuthProvider>
        </body>
    </html>
  );
}
