"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions;
}

const Chart = () => {
  const [state, setState] = useState<ChartState>({
    series: [
      {
        name: "MATERIAL DE EXPEDIENTE",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 63, 77, 43],
      },
      {
        name: "HIGIENE E LIMPEZA",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 63, 32, 66],
      },
      {
        name: "MATERIAL DESCARTÁVEIS",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 63, 23, 66],
      },
      {
        name: "GENEROS ALIMENTÍCIOS",
        data: [35, 41, 26, 26, 45, 77, 52, 53, 41, 55, 60, 66],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: ["#1E90FF", "#28A745", "#FFC107", "#DC3545"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart" className="w-2xl h-100 bg-gray-200 rounded-md p-4 shadow">
        <ApexCharts
          options={state.options}
          series={state.series}
          type="bar"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Chart;
