
import DynamicChart from "@/components/DynamicChart";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import KpiCard from "@/components/KpiCard";
import { FaBox, FaExclamationTriangle, FaStopCircle, FaArrowUp, FaArrowDown } from "react-icons/fa";


export default function Home() {


  return (
    <div className="flex justify-evenly w-full ">
      <Sidebar />
      <main className="flex flex-1 flex-col">
        <Navbar />

        <div className="flex justify-center items-center flex-col">
           <div className=" grid grid-cols-1 lg:grid-cols-5 gap-10 h-full items-center justify-items-center pb-[100px] p-4 sm:p-4  py-6">


        {[1, 2, 3, 4, 5].map((index) => (
  <article key={index}>
    <section className="h-40 flex items-center justify-center">
      {(() => {
        switch (index) {
          case 1:
            return <KpiCard title="Entradas" value={1200} icon={<FaArrowUp />} color="#36a2eb" />;
          case 2:
            return <KpiCard title="Saídas" value={950} icon={<FaArrowDown />} color="#ff6384" />;
          case 3:
            return <KpiCard title="Estoque Atual" value={2500} icon={<FaBox />} color="#029334" />;
          case 4:
            return <KpiCard title="Valor Gasto" value="R$ 15.200,00" icon={<FaStopCircle />} color="#ffcd56" />;
          case 5:
            return <KpiCard title="Produtos Críticos" value={120} icon={<FaExclamationTriangle />} color="#ffcd00" />;
          default:
            return null;
        }
      })()}
    </section>
  </article>
))}

            </div>

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 h-full items-center justify-items-center pb-[100px] p-4 sm:p-4  py-6">

             {[1, 2, 3, 4, 5, 6].map((index) => (

              <article
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center max-w-full w-3xl "
              >                <section className="h-90 flex items-center justify-center">
                   <DynamicChart index={index} />                
                  </section> 
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
