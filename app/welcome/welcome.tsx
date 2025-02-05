import React, { useState } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

interface WelcomeProps {
  productId: string;
}

export const Welcome: React.FC<WelcomeProps> = ({ productId }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleReserve = (): void => {
    alert(
      `Reserva confirmada para el producto ${productId} con email: ${email}`
    );
    setModalOpen(false);
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
            onClick={() => setModalOpen(true)}
          >
            Reservar
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[90%] max-w-md text-center">
            <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
              Ingrese su correo electrónico
            </h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              className="w-full border border-gray-300 p-2 rounded mb-4 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={handleReserve}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full"
            >
              Confirmar
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
