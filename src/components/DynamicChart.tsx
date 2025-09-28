"use client"; // necessário aqui porque vamos usar hooks

import React, { useState, useEffect } from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,    
  ArcElement, 
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,    
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface DynamicChartProps {
  index: number; // 1 a 5
}

// Array de gráficos fora do componente para não disparar warning do ESLint
const chartsArray = [
  {
    title: "Vendas Mensais",
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    dataPoints: [10, 20, 15, 25],
  },
  {
    title: "Entradas",
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    dataPoints: [5, 10, 8, 12],
  },
  {
    title: "Saídas",
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    dataPoints: [2, 4, 6, 3],
  },
  {
    title: "Estoque Atual",
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    dataPoints: [50, 55, 60, 57],
  },
];

const DynamicChart: React.FC<DynamicChartProps> = ({ index }) => {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    dataPoints: [] as number[],
    title: "",
  });

  useEffect(() => {
    const chart = chartsArray[index - 1]; // index começa em 1
    if (chart) setChartData(chart);
  }, [index]);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Entradas",
        data: [50, 55, 60, 57, 20, 13, 45, 22, 10, 4, 79, 110],
        fill: false,
        backgroundColor: "#02933493",
        borderColor: "#0293",
      },
      {
        label: "Saídas",
        data: [40, 25, 30, 35, 10, 8, 28, 14, 9, 2, 60, 88],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

   const data1 = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Material de Limpeza",
        data: [10, 20, 15, 25],
        fill: false,
        backgroundColor: "#02933493",
      
      },

       {
        label: "Material de Expediente",
        data:  [5, 10, 8, 12],
        fill: false,
        backgroundColor: "#4255",
        
      },

       {
        label: "Alimentícios",
        data:  [12, 30, 28, 12],
        fill: false,
        backgroundColor: "#664",
      
      },

       {
        label: "Material Descartáveis",
        data: [52, 11, 23, 45],
        fill: false,
        backgroundColor: "#411",
       
      },
    ],
  };

  const dataBarH1 = {
    labels: ["Material de Limpeza", "Material de Expediente", "Alimentícios", "Material Descartáveis"],
    datasets: [
      {
        label: "Entradas",
        data: [120, 90, 100, 140, 180, 200, 150, 130, 160, 170, 190, 210],
        backgroundColor: "rgba(54, 162, 235, 0.7)", // azul
      },
      {
        label: "Saídas",
        data: [80, 70, 95, 110, 160, 180, 120, 100, 140, 150, 170, 190],
        backgroundColor: "rgba(255, 99, 132, 0.7)", 
      },
    ],
  };

  const optionsBarH1 = {
    indexAxis: "y" as const, 
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Entradas vs Saídas por Mês",
        font: {
          size: 16,
          weight: 700,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Quantidade (UNI)",
        },
      },
    },
  };

  const dataBarH2 = {
    labels: ["Setor A", "Setor B", "Setor C", "Setor D"],
    datasets: [
      {
        label: "Saídas",
        data: [120, 90, 100, 140, 180, 200, 150, 130, 160, 170, 190, 210],
        backgroundColor: "rgba(255, 99, 132, 0.7)", // azul
      },
    ],
  };

  const optionsBarH2 = {
    indexAxis: "y" as const, 
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Saídas por Setor",
        font: {
          size: 16,
          weight: 700,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Quantidade (UNI)",
        },
      },
    },
  };

  const options: ChartOptions<"line" | "bar"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: !!chartData.title, text: chartData.title },
      tooltip: {
  callbacks: {
    label: function (tooltipItem: TooltipItem<"bar" | "line">) {
      const value = tooltipItem.raw as number;
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
},
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number | string) => {
            const num = Number(value);
            return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
          },
        },
      },
    },
  };

  const dataPie = {
    labels: ["Material de Limpeza", "Material de Expediente", "Alimentícios", "Material Descartáveis"],
    datasets: [
      {
        label: "Participação",
        data: [50, 30, 15, 5],
        backgroundColor: [
          "rgba(46, 204, 113, 0.8)",
          "rgba(52, 152, 219, 0.8)",
          "rgba(241, 196, 15, 0.8)",
          "rgba(231, 76, 60, 0.8)",
        ],
        borderColor: [
          "rgba(46, 204, 113, 1)",
          "rgba(52, 152, 219, 1)",
          "rgba(241, 196, 15, 1)",
          "rgba(231, 76, 60, 1)",
        ],
        borderWidth: 2,
        hoverOffset: 12,
      },
    ],
  };

 const optionsPie: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      right: 10,
    },
  },
  plugins: {
     legend: {
      position: "right",
      title: {
        display: true,
        text: "Participação por categoria",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          bottom: 12,
        },
      },
      labels: {
        boxWidth: 20,
        padding: 20,
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: TooltipItem<"pie">) => {
          const dataset = tooltipItem.dataset.data as number[];
          const value = tooltipItem.raw as number;
          const total = dataset.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        },
      },
    },
  },
};


const produtos = [
    { nome: "Produto A", retiradas: 120 },
    { nome: "Produto B", retiradas: 90 },
    { nome: "Produto C", retiradas: 150 },
    { nome: "Produto D", retiradas: 70 },
    { nome: "Produto E", retiradas: 130 },
    { nome: "Produto F", retiradas: 50 },
  ];

  
  const top5 = produtos
    .sort((a, b) => b.retiradas - a.retiradas)
    .slice(0, 5);

  const dataR = {
    labels: top5.map((p) => p.nome),
    datasets: [
      {
        data: top5.map((p) => p.retiradas),
        backgroundColor: [
          "#029334",
          "#4bc0c0",
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
        ],
        
      borderWidth: 2,
      hoverOffset: 12,
      },
    ],
  };

  const optionsR: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      right: 10,
    },
  },
    plugins: {
      legend: {
        position: "right" as const,
        title: {
        display: true,
        text: "Top 5 Mais Retirados",
        font: {
          size: 16,
          weight: 700,
        },
        padding: {
          bottom: 12,
        },

      },
        labels: {
          boxWidth: 100,
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"doughnut">) => {
            const dataset = tooltipItem.dataset.data as number[];
            const total = dataset.reduce((acc, val) => acc + val, 0);
            const value = tooltipItem.raw as number;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };


    if (index === 1) return <Line data={data} options={options} />;
    if (index === 2) return <Bar data={data1} options={options}/>;
    if (index === 3) return <Pie data={dataPie} options={optionsPie} />;
    if (index === 4) return <Bar data={dataBarH1} options={optionsBarH1}/>;
    if (index === 5) return <Bar data={dataBarH2} options={optionsBarH2}/>; 
    if (index === 6) return <Doughnut data={dataR} options={optionsR} />;

  return null;
};

export default DynamicChart;
