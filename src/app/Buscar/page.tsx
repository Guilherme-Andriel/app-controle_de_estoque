import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Interface from "@/components/Interface";
import InputSearch from "@/components/InputSearch";



const Buscar = () => {

    return(
        <div className="flex justify-evenly w-full">
            <Sidebar/>  
            <main className="flex flex-1 flex-col">
                    <Navbar/>
                    <div className="flex flex-col justify-center items-center h-full w-full border-8">
                        <InputSearch/>
                        <Interface tipo="busca" />
                    </div>
                   
            </main>
        </div>
    )
};

export default Buscar;
