"use client";
import { Printer, LayoutDashboard, Search, Database, CircleMinus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'; 

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
  <div className="sticky top-0 left-0 flex md:hidden justify-between items-center w-screen bg-[#f4f4f4] shadow-lg">
    <header className="flex flex-row items-center gap-2 p-6">
        <Image src="/icon.svg" alt="Logo" priority width={30} height={30} />
        <p className="text-3xl font-bold text-[#71C2D0]">CePCLIN</p>
    </header>
    <nav className="fixed bottom-0 left-0  w-screen bg-[#f4f4f4] flex-row transition-all rounded-t-3xl shadow-lg">
      <ul className="flex justify-around mt-5 space-y-4">
        {menuItems.map((item) => {
           const isActive = pathname === item.href; 
        return(
          <li
            key={item.id}
            className=""
          ><Link href={item.name === 'Dashboard' ? '/' : `/${item.name}`} className={`flex items-center justify-center gap-4 p-2 rounded-lg cursor-pointer
             ${isActive ? "bg-[#71C2D0] text-white" : "hover:bg-[#e3e9f7]"}
          `}>
            {item.icon}
            </Link>
          </li>
        )})}
      </ul>

   </nav>

   <button className="flex items-center justify-center p-5 rounded-lg text-white hover:bg-blue-400 bg-blue-300 h-4 m-4">
        <Printer />
    </button>
    


  </div>
    

  );
}
