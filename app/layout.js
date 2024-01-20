import { Lato } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "900"] });

export const metadata = {
  title: "Primera App Next",
  description: "Proyecto NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={lato.className}>
        <div className='flex items-center justify-between bg-violet-600 text-white py-6 px-10'>
          <Link href='/'>
            <h1 className='text-2xl font-bold'>Next JS</h1>
          </Link>
          <Menu />
        </div>
        {children}
      </body>
    </html>
  );
}
