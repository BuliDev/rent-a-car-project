import React from "react";

const TechnicalCard = ({ icon, title, value }) => {
  return (
    <div className="bg-[#fafafa] p-4 rounded-lg max-w-50">
      <img src={icon} className="w-6 h-6 text-gray-600 mb-5" />
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
  );
};

export default TechnicalCard;
