import React from "react";

function Banner() {
  return (
    <div className={`bg-cover bg-center h-[1000px] text-white py-24 px-10 object-fill bg-background-header2`} >
      <div className="h-full flex items-center">
       <div className="md:w-1/2 pl-[5%]">
        <p className="font-bold text-lg uppercase">Services</p>
        <p className="text-3xl font-bold">Multimedia products</p>
        <p className="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
        <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Nossos Serviços</a>
        </div>  
      </div>
    </div>
  );
}

export default Banner;
