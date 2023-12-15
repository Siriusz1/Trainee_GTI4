import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

function ServiceCard({ id, title, text, avatarSrc }) {
  return (
    <Card
      key={id}
      className="md:max-w-[25rem] max-w-[18rem] overflow-hidden border hover:border-purple-600 hover:scale-[1.1] duration-500 xl:h-[70%] h-[85%] mb-8"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        {/* Imagem padrão ou qualquer imagem que você queira usar */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
          className="w-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className=" md:font-normal text-lg">
          {text}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src={avatarSrc}
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          {/* Adicione mais avatares conforme necessário */}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
