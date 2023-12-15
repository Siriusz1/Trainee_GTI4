import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between px-[5%] bg-[#07031C]">
      <Typography className="font-normal custom-color">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 custom-color"
          >
            Sobre Nós
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 custom-color"
          >
            Contato
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 custom-color"
          >
            Quiz
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 custom-color"
          >
            Licença
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
