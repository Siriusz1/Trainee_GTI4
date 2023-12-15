import React from "react";
import database from "../numbers.json";

function CompanyNumbers() {
  return (
    <div className="md:h-[600px] h[800px] flex justify-center items-center">
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {database.Numbers.map((numbersData) => (
          <div
            key={numbersData.id}
            className="p-10 rounded-lg shadow-md flex flex-col items-center"
          >
            <h2 className="text-[#9D06FF] text-5xl font-semibold mb-4">{numbersData.value}</h2>
            <p className="text-[#601E8F]">{numbersData.title}</p>
            <div className="border-t border-gray-300 mt-4 w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CompanyNumbers;
    