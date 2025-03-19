import React from "react";
import appleIcon from "../assets/apple.png";
import playIcon from "../assets/play.png";
import iPhone from "../assets/iPhone14.png";
import DownloadButton from "./DownloadButton";

const AppDownload = () => {
  return (
    <section className="p-7 lg:px-30">
      <div className="text-center flex flex-col lg:flex-row lg:text-left justify-between items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="mb-10 text-3xl font-bold tracking-wider">
            Download <br />
            mobile app
          </h2>
          <p className="mb-15 tracking-wide text-gray-600">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
            aliquet cras hendrerit enim condimentum. Condimentum interdum risus
            bibendum urna
          </p>

          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-5 items-center">
            <DownloadButton
              icon={appleIcon}
              title="App Store"
              subtitle="Download on the"
              href="#"
            />
            <DownloadButton
              icon={playIcon}
              title="Google Play"
              subtitle="GET IT ON"
              href="#"
            />
          </div>
        </div>
        <div className="hidden lg:flex relative justify-center">
          <img src={iPhone} alt="iPhone" className="w-[267px]" />
          <img
            src={iPhone}
            alt="iPhone"
            className="w-full absolute right-45 top-10 bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
