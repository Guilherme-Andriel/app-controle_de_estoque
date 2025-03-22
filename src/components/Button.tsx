import { Printer } from "lucide-react";


interface ButtonProps {
  texto?: string;
  icone?: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  open?: boolean;
}

// Componente Button
function Button({  texto = "Clique Aqui", icone: Icon = Printer, open = true  }: ButtonProps) {
  return (
    <button className="mt-auto flex items-center justify-center gap-4 p-2 rounded-lg text-white hover:bg-blue-400 bg-blue-300">
      {/* Renderizando o ícone */}
      <Icon className="text-white" />
      {/* Renderizando o texto apenas se open for verdadeiro */}
      {open && <span>{texto}</span>}
    </button>
  );
}

export default Button;
