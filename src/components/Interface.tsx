import React from "react";
import Formulario from "./Formulario";
import Search from "./Search";

interface InterfaceProps {
  tipo: "entrada" | "saida" | "busca";
}

const Interface = (props: InterfaceProps) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 min-h-[600px]">
      {props.tipo === "entrada" || props.tipo === "saida" ? ( <Formulario tipo={props.tipo} /> ) : ( <Search /> )}
      </div>
    </div>
  );
};

export default Interface;
