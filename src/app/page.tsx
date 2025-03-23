import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex justify-evenly w-full ">
              <Sidebar/>
              <main className="flex flex-1 flex-col">
                    <Navbar/>
            
                    <div className="flex flex-1 ">
                      

                            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 h-full w-full items-center justify-items-center pb-[100px] p-4 sm:p-4  py-6">
                              
                                      {Array.from({ length: 6 }).map((_, index) => (
                                        <article key={index} className="bg-white p-6 rounded-lg shadow-lg text-center max-w-full w-2xl ">
                                          <h2 className="text-2xl font-bold mb-4">Gráfico {index + 1}</h2>
                                          <section className="h-32 flex items-center justify-center bg-gray-200 rounded-md">
                                            Imagem
                                          </section>
                                        </article>
                                      ))}

                            </div> 
                    </div>
              </main>
   </div>
  );
}
