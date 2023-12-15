import React from "react";
import SedeCard from "./SedeCards"; // Importe o novo componente
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import database from "../sedes.json";

export function Sedes() {
  return (
    <div className="flex flex-col items-center justify-center py-[5%]">
      <h1 className="z-20 text-xl md:text-4xl text-white mb-10 ">
        LOCALIZAÇÃO
      </h1>
      <div className="w-full h-auto flex ">
        <div className="flex w-full justify-around items-center flex-wrap md:gap-5 gap-4 p-[2%]">
          {database.Sedes.map((sedeData) => (
            <SedeCard
              key={sedeData.id}
              id={sedeData.id}
              location={sedeData.location}
              description={sedeData.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
