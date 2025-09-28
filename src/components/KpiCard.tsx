"use client";

import React from "react";

interface KpiCardProps {
  title: string;        
  value: number | string; 
  icon?: React.ReactNode; 
  color?: string;        
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, color = "#029334" }) => {
  return (
    <div
      className="flex flex-col justify-between p-4 rounded-xl shadow-md w-60 h-32"
      style={{ borderTop: `4px solid ${color}`, backgroundColor: "#fff" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        {icon && <div className="text-2xl">{icon}</div>}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default KpiCard;
