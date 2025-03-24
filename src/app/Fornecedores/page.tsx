import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Fornecedores = () => {

    return(
        <div className="flex justify-evenly w-full">
            <Sidebar/>
            <main className="flex flex-1 flex-col">
                <Navbar/>
                <div>
                    <p>Fornecedores</p>
                </div>
            </main>
            
        </div>
    )
};

export default Fornecedores;
