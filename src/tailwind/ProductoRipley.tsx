import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const data = [
  "https://home.ripley.cl/store/Attachment/WOP/D141/2000381125819/2000381125819-3.jpg",
  "https://home.ripley.cl/store/Attachment/WOP/D141/2000381125819/2000381125819-1.jpg",
  "https://home.ripley.cl/store/Attachment/WOP/D141/2000381125819/2000381125819-4.jpg",
  "https://home.ripley.cl/store/Attachment/WOP/D141/2000381125819/2000381125819_2.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/te6y2d0eti6qsqyfvl6e/calzado-air-force-1-sage-low-cSgsrx.jpg",
];

const Imagenes = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start md:justify-around md:space-x-1">
      <div className="flex my-1 space-x-1 md:my-0 md:space-x-0 md:space-y-1 md:flex-col">
        {data.map((image, i) => (
          <img
            key={i}
            alt="DEPILADORA PHILIPS BRE715"
            className=" w-10 md:w-20 md:h-20 object-cover object-top border  hover:border-gray-400 cursor-pointer"
            src={image}
          />
        ))}
      </div>
      <div className="bg-pink-500">
        <img
          className="object-cover"
          src="https://home.ripley.cl/store/Attachment/WOP/D392/2000382300086/2000382300086_2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

const NombreProducto = () => {
  return (
    <div className="p-2">
      <div>
        <span className="uppercase text-sm text-gray-500">Philips</span>
        <h1 className="uppercase text-gray-700 font-bold text-xl">Camisa</h1>
        <span className="text-sm text-gray-500">SKU: 2000380534421</span>
      </div>

      <div className="flex space-x-1 text-sm items-center text-gray-500">
        <div className="flex">
          <StarIcon className="h-6 w-6 text-gray-300" />
          <StarIcon className="h-6 w-6 text-gray-300" />
          <StarIcon className="h-6 w-6 text-gray-300" />
          <StarIcon className="h-6 w-6 text-gray-300" />
          <StarIcon className="h-6 w-6 text-gray-300" />
        </div>
        <div>(Sin calificaciones)</div>
      </div>
      <h2 className="text-gray-500 font-light mt-3">Depiladora</h2>
    </div>
  );
};

const DetallesProducto = () => {
  return (
    <div className="p-2 my-5 md:my-0 ">
      <div className="space-y-2">
        <div className="flex justify-between text-gray-500 font-light">
          <span className="">Normal</span>
          <span className="line-through">$74.990</span>
        </div>
        <div className="flex justify-between font-bold text-gray-500">
          <span className="">Internet</span>
          <span className="">$61.990</span>
        </div>
        <div className="flex justify-between text-ripley font-bold">
          <span className="">Tarjeta Ripley o Check</span>
          <div className="flex space-x-1">
            <img
              src="//static.ripley.cl/images/opex.png"
              className="h-5"
              alt="Precio Tarjeta Ripley"
            />
            <img
              src="//static.ripley.cl/images/chek-morado.svg"
              className="h-5"
              alt="App Chek"
              title="App Chek"
            />
            <span className="">$56.990</span>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-light">Descuento</span>
          <span className="bg-red-500 py-1 px-2 text-white text-sm font-bold rounded-bl-3xl rounded-tl-3xl">
            {" "}
            -24%{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row text-sm justify-between text-gray-700 py-1 px-2 rounded-md bg-gray-200 my-4">
        <div className="flex space-x-2">
          <div className="hidden lg:block">
            <svg height="24px" id="puntosgo" viewBox="0 0 229.01 275.55">
              <g id="Capa_2" data-name="Capa 2">
                <path
                  className="estrella_ripley "
                  d="M177.1 121.23l51.91-54.87-70.72 8.5L130.11 0 99.83 83.97 0 97.47l79.4 43.46-48.23 134.62 100.31-106.09 77.73 42.5-32.11-90.73z"
                  id="Capa_1-2"
                  data-name="Capa 1"
                ></path>
              </g>
            </svg>
          </div>
          <span>Con tarjeta Ripley acumulas</span>
        </div>
        <div className="flex space-x-1">
          <span className="font-bold block">160</span>
          <span className="block">RipleyPuntos GO</span>
        </div>
      </div>
    </div>
  );
};

export const ProductoRipley = () => {
  return (
    <div className="migrid mx-3 gap-x-6">
      <div className="foto ">
        <Imagenes />
      </div>
      <div className="nombre ">
        <NombreProducto />
      </div>
      <div className="detalles  ">
        <DetallesProducto />
      </div>
    </div>
  );
};
