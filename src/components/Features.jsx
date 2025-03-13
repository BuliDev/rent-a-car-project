import React from "react";
import features from "../data/featuresData";

const Features = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1296px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="max-w-[357px] text-center mx-auto">
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
