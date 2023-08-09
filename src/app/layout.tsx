import Header from "./components/base/Header";
import Sidebar from "./components/base/Sidebar";
import Footer from "./components/base/footer";
import "./globals.css";
import "ka-table/style.css";
import { Inter } from "next/font/google";

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
        <div>
          <Sidebar />
          <main className="xl:pl-72 pb-40">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
