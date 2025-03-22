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
  <div className="flex sm:hidden justify-between w-screen bg-[#f4f4f4]">
    <div className="flex flex-row items-center gap-2 p-6">
        <Image src="/icon.svg" alt="Logo" priority width={30} height={30} />
        <p className="text-3xl font-bold text-[#71C2D0]">CePCLIN</p>
    </div>
    <nav className="w-screen bg-[#f4f4f4] flex-row absolute bottom-0 transition-all rounded-t-2xl ">
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

   <button className="flex items-center justify-center gap-4 p-6 rounded-lg text-blue-600 hover:bg-blue-200">
        <Printer />
    </button>
    


  </div>
    

  );
}
