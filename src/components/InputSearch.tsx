import Button from "./Button";

const InputSearch = () => {
  return (
    <div className="flex items-center justify-between sm:w-5/6 p-4 border">
      <div className="flex gap- items-center w-3/4 min-w-[230px] h-[40px] border rounded-lg overflow-hidden bg-gray-500">
        <input
          type="text"
          className="flex-1 p-2 pl-4 bg-gray-200 focus:outline-none w-full"
          placeholder="Pesquisar..."
        />
        
        <Button texto="B" className="bg-gray-500 text-white px-4 py-2" />
      </div>
      <Button texto="Filtro" className="bg-gray-500 text-white px-4 py-2" />
    </div>
  );
};

export default InputSearch;
