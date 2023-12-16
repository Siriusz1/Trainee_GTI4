import React from "react";
import ServiceCard from "./ServiceCard";
import { Typography } from "@material-tailwind/react";
import database from "../services.json";

export function Services() {
  return (
    <div className="flex flex-col items-center justify-center py-[5%]">
      <h1 className="z-20 text-xl md:text-4xl text-white mb-10 ">
        NOSSOS SERVIÇOS
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
        {database.Services.map((serviceData) => (
          <ServiceCard
            key={serviceData.id}
            id={serviceData.id}
            title={serviceData.title}
            text={serviceData.text}
            avatarSrc={
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
            }
          />
        ))}
      </div>
    </div>
  );
}
