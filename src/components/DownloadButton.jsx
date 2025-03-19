import React from "react";

const DownloadButton = ({ icon, title, subtitle, href }) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-4 text-white py-2 px-6 bg-black rounded-lg"
    >
      <img src={icon} alt={title} className="h-6 w-6" />
      <div>
        <p className="text-sm">Download on the</p>
        <h3 className="text-xl">{title}</h3>
      </div>
    </a>
  );
};

export default DownloadButton;
