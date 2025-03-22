import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Buscar = () => {

    return(
        <div className="flex">
            <Sidebar/>  
           <main>
           <Navbar/>
             <p>Buscar</p>
           </main>

           
        </div>
    )
};

export default Buscar;
