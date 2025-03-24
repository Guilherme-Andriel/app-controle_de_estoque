import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Interface from "@/components/Interface";

const Entrada = () => {

    return(
        <div className="flex justify-evenly w-full">
            <Sidebar/>
                    <main className="flex flex-1 flex-col">
                        <Navbar/>
                        <div className="flex flex-col justify-center h-full">
                            <Interface tipo="entrada" />
                        </div>
                    </main>
        </div>
    )
};

export default Entrada;
