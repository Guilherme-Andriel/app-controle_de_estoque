import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Interface from "@/components/Interface";

const Saida = () => {

    return(
        <div className="flex justify-evenly w-full">
            <Sidebar/>
            <main className="flex flex-1 flex-col">
                <Navbar/>
                <div>
                        <Interface tipo="saida" />
                </div>
           </main>
        </div>
    )
};

export default Saida;
