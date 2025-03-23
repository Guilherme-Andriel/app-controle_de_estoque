"use client";
import Image from 'next/image'; 
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronsRight, Printer, LayoutDashboard, Search,  Database, CircleMinus, ShoppingBag} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const menuItems = [
  { id: 1, name: "Dashboard", icon: <LayoutDashboard />, href: "/" },
  { id: 2, name: "Buscar", icon: <Search />, href: "/Buscar" },
  { id: 3, name: "Entrada", icon: <Database />, href: "/Entrada" },
  { id: 4, name: "Saida", icon: <CircleMinus />, href: "/Saida" },
  { id: 5, name: "Fornecedores", icon: <ShoppingBag />, href: "/Fornecedores" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: open ? 250 : 100 }}
      
      className="sticky left-0 top-0 hidden sm:flex h-screen bg-[#f4f4f4] p-4 flex-col transition-all rounded-r-2xl shadow-lg"
    >

      <div className="p-3 relative mb-3">
        <div className="flex flex-row items-center gap-2">
          <Image src="/icon.svg" alt="Logo" priority width={30} height={30} />
          <p className={`text-sm sm:text-4xl font-bold text-[#71C2D0] ${open ? 'block' : 'hidden'}`}>CePCLIN</p>
        </div>
      </div>

      <button 
        onClick={() => setOpen(!open)}
        className="absolute top-4 right-[-12px] bg-[#71C2D0] text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
      >
        <ChevronsRight size={18}/>
      </button>

      <ul className="mt-10 space-y-4">
        {menuItems.map((item) => {
           const isActive = pathname === item.href; 
        return(
          <li
            key={item.id}
            className=""
          ><Link href={item.name === 'Dashboard' ? '/' : `/${item.name}`} className={`flex items-center justify-center gap-4 p-2 rounded-lg cursor-pointer ${open? 'justify-start':''}
             ${isActive ? "bg-[#71C2D0] text-white" : "hover:bg-[#e3e9f7]"}
          `}>
            {item.icon}
            {open && <span className={`text-gray-900  ${isActive ?"text-white" : ""}` }>{item.name}</span>}
            </Link>
          </li>
        )})}
      </ul>

      <button className="mt-auto flex items-center justify-center gap-4 p-2 rounded-lg text-white hover:bg-blue-400 bg-blue-300">
     
      <Printer className="text-white" />
      {open && <span>Imprimir</span>}
    </button>
    </motion.aside>
  );
}
