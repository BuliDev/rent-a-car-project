import React from "react";
import facts from "../data/factsData";

const Facts = () => {
  return (
    <section className="p-15 lg:px-0">
      <div className="bg-[#5937E0] relative z-20 py-15 px-18 pb-30 rounded-3xl text-white text-center">
        <div className="max-w-[756px] mx-auto">
          <h1 className="text-3xl font-bold tracking-wider mb-5">
            Facts In Numbers
          </h1>
          <p className="mb-20">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum
          </p>
        </div>
        <div className="facts-bg"></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="flex items-center gap-6 bg-white text-black p-4 max-w-[240px] text-left rounded-2xl"
            >
              <div>
                <img
                  src={fact.icon}
                  alt={fact.text}
                  className="bg-[#FF9E0C] p-4 rounded-xl"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl">{fact.number}</h1>
                <p className="text-gray-500">{fact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
