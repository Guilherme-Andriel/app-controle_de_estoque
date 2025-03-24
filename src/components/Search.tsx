import React from "react";
import Table from "./Table";



interface SearchProps {
  tipo: "busca";
}

const dados = [
  { id: 1, nome: 'João', quant: 30, link: 'São Paulo' },
  { id: 2, nome: 'Maria', quant: 25, link: 'Rio de Janeiro' },
  { id: 3, nome: 'José', quant: 35, link: 'Belo Horizonte' },
];

const Search = (props: SearchProps) => {
  const busca=props.tipo
  return (
    
    <div>
      
      <Table dados={dados} />
    </div>  
   
  );
};

export default Search;
