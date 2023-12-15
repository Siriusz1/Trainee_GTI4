import React from "react";

function DepositionCard({ id, img, name, mensage }) {
  return (
    <div key={id} className="bg-white h-[450px] text-black rounded-xl">
      <div className="h-56 rounded-t-xl bg-[#601E8F] flex justify-center items-center">
        <img src={img} alt="Usuário" className="h-[85%] rounded-full" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-[5%]">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-center 2xl:text-sm xs:text-xs">{mensage}</p>
        <button className="bg-[#9d06ff] text-white px-[6%] py-[2%] rounded-xl text-base sm:text-xs md:text-xl">
          Read More
        </button>
      </div>
    </div>
  );
}

export default DepositionCard;
