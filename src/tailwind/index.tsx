import React, { useRef, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function TailwindIndex() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<any>();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    inputRef.current.focus();
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(modalIsOpen);
  return (
    <div>
      <h1>Hola</h1>
      <h3>H3 jajajaja</h3>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
        className="border-gray-200 border rounded-md mx-5 top-1/4 md:left-1/4 md:right-1/4 absolute md:mx-auto "
      >
        <div className="p-5">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Nuevo Producto</h2>
            <button onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-3 lg:space-x-2">
            <div>
              <input
                id="nombre"
                placeholder="Nombre"
                ref={inputRef}
                className=""
              />
            </div>
            <div>
              <input id="apellido" placeholder="Apellido" className="" />
            </div>
            <div>
              <input id="edad" type="number" placeholder="Edad" className="" />
            </div>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic
            deserunt laboriosam, blanditiis illum perspiciatis eveniet sunt
            inventore necessitatibus quidem alias amet corporis in. Velit
            repellat ducimus dolores quo nobis.{" "}
          </p>

          <div className="flex justify-end">
            <button className="btn-purple">Crear</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TailwindIndex;
