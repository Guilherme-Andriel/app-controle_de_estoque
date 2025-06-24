"use client";
import {
  Printer,
  LayoutDashboard,
  Search,
  Database,
  CircleMinus,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { id: 1, name: "Dashboard", icon: <LayoutDashboard />, href: "/" },
  { id: 2, name: "Buscar", icon: <Search />, href: "/Buscar" },
  { id: 3, name: "Entrada", icon: <Database />, href: "/Entrada" },
  { id: 4, name: "Saida", icon: <CircleMinus />, href: "/Saida" },
  { id: 5, name: "Fornecedores", icon: <ShoppingBag />, href: "/Fornecedores" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 left-0 flex md:hidden justify-evenly items-center w-screen bg-[#f4f4f4] shadow-lg h-[60px]">
      <header className="flex flex-row items-center gap-1 p-6">
        <Image
          src="/icon.svg"
          alt="Logo"
          priority
          width={30}
          height={30}
          className="w-[35px] h-[35px]"
        />
        <p className="text-2xl font-bold text-[#71C2D0]">CePCLIN</p>
      </header>

      <nav className="fixed bottom-6 w-2xs h-[60px] bg-[#f4f4f4] flex-row justify-center items-center transition-all rounded-3xl shadow-lg ">
        <ul className="flex justify-around h-full items-center ">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.id}>
                <Link
                  href={item.name === "Dashboard" ? "/" : `/${item.name}`}
                  className={`w-[38px] h-[38px] flex items-center justify-center gap-4 p-2 rounded-lg cursor-pointer
             ${isActive ? "bg-[#71C2D0] text-white" : "hover:bg-[#e3e9f7]"}
          `}
                >
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button className="flex items-center justify-center p-4 rounded-lg text-white hover:bg-blue-400 bg-blue-300 h-4 m-4">
        <Printer className="w-[26px] h-[26px]" />
      </button>
    </div>
  );
}
