import React from 'react';

// Definindo os tipos para as props da Table
interface TableProps {
  dados: {
    id: number;
    nome: string;
    quant: number;
    link: string;
  }[];
}

const Table = (props: TableProps) => {
  return (
    <div className="overflow-y-scroll">
        <h2 className="text-2xl font-bold mt-4 mb-4">Items Novos</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Nome do Produto</th>
            <th className="px-4 py-2 text-left">Quant</th>
          </tr>
        </thead>
        <tbody>
          {props.dados.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-100">
             
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.quant}</td>

            </tr>
          ))}
        </tbody>
        <tbody>
          {props.dados.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-100">
             
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.quant}</td>

            </tr>
          ))}
        </tbody>
        <tbody>
          {props.dados.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-100">
             
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.quant}</td>

            </tr>
          ))}
        </tbody><tbody>
          {props.dados.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-100">
             
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.quant}</td>

            </tr>
          ))}
        </tbody><tbody>
          {props.dados.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-100">
             
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.quant}</td>

            </tr>
          ))}
        </tbody><tbody>
          {props.dados.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-100">
             
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.quant}</td>

            </tr>
          ))}
        </tbody><tbody>
          {props.dados.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-100">
             
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.quant}</td>

            </tr>
          ))}
        </tbody>
      </table>

      

     
    </div>
  );
};

export default Table;
