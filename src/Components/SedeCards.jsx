import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { FaClock } from "react-icons/fa";

function SedeCard({ id, location, description }) {
  return (
    <Card key={id} className="w-full md:max-w-[26rem] max-w-[22rem] shadow-lg ">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {location}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          ></Typography>
        </div>
        <Typography color="gray">{description}</Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="Localização">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaMapLocationDot />
            </span>
          </Tooltip>

          <Tooltip content="Fotos">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <AiFillPicture />
            </span>
          </Tooltip>

          <Tooltip content="Horário de Funcionamento">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaClock />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Go to Maps
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SedeCard;