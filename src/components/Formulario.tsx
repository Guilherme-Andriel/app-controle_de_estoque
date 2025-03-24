import React from "react";

interface FormProps {
  tipo: "entrada" | "saida";
}

const Formulario = (props: FormProps) => {
  const isEntrada = props.tipo === "entrada";

  return (
  
      <div>
        <h2 className="text-2xl font-bold mb-4">Controle de Estoque</h2>

        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <span className="font-semibold">
              {isEntrada ? "Usado?" : "Ajuste de Estoque?"}
            </span>
            <input type="checkbox" className="toggle-switch" />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">
              {isEntrada ? "Data do Pedido:" : "Data de Saída:"}
            </label>
            <input type="date" className="input-field" />
          </div>

          {isEntrada && (
            <div>
              <label className="block font-semibold">Código:</label>
              <input type="text" className="input-field" />
            </div>
          )}

          <div>
            <label className="block font-semibold">ID do Produto:</label>
            <input type="text" className="input-field" />
          </div>

          <div className="col-span-2">
            <label className="block font-semibold">Nome:</label>
            <input type="text" className="input-field w-full" />
          </div>

          <div>
            <label className="block font-semibold">Categoria:</label>
            <input type="text" className="input-field" />
          </div>

          <div>
            <label className="block font-semibold">Tipo de Unidade:</label>
            <input type="text" className="input-field" />
          </div>

          <div>
            <label className="block font-semibold">Quantidade:</label>
            <input type="number" className="input-field" />
          </div>

          {isEntrada ? (
            <>
              <div>
                <label className="block font-semibold">Valor Unitário:</label>
                <input type="text" className="input-field" />
              </div>

              <div>
                <label className="block font-semibold">Data de Entrega:</label>
                <input type="date" className="input-field" />
              </div>

              <div>
                <label className="block font-semibold">Nº Nota Fiscal (NF):</label>
                <input type="text" className="input-field" />
              </div>

              <div>
                <label className="block font-semibold">Valor da NF:</label>
                <input type="text" className="input-field" />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block font-semibold">Solicitante:</label>
                <input type="text" className="input-field" />
              </div>

              <div>
                <label className="block font-semibold">Setor:</label>
                <input type="text" className="input-field" />
              </div>

              <div>
                <label className="block font-semibold">Horário:</label>
                <input type="time" className="input-field" />
              </div>
            </>
          )}
        </div>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
          {isEntrada ? "Enviar Entrada" : "Enviar Saída"}
        </button>
      </div>
   
  );
};

export default Formulario;
