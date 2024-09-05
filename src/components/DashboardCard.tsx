import React from "react";

interface DashboardCardProps {
  title: string;
  numbers: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, numbers }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-slate-200 p-4 shadow-md transition-all delay-150 duration-300 ease-in-out  hover:cursor-pointer">
      <div className="text-xl font-semibold capitalize">{title}</div>
      <div className={`text-4xl  font-semibold  md:text-2xl text-gray-300}`}>
        {numbers}
      </div>
    </div>
  );
};

export default DashboardCard;
