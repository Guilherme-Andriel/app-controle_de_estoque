import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar/>
      <main>
     
          <Navbar/>
          <h1 className="font-bold text-3xl m-6 relative md:left-20 md:top-10">Controle de Estoque</h1>
   
        <section></section>
      </main>
   </div>
  );
}
