import React, { useState } from 'react';

interface AlertDialogProps {
  message: string;
  onClose: () => void;
}

const AlertDialog = ({ message, onClose }: AlertDialogProps) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // Poczekaj aż animacja się skończy
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className={`z-10 m-2 transform rounded-xl bg-stone-200 p-6 shadow-2xl transition-transform duration-300 ${
          visible ? 'scale-100' : 'scale-90'
        }`}
      >
        <p className="mb-4 text-center text-gray-800">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={handleClose}
            className="cursor-pointer rounded-md bg-stone-900 px-4 py-2 text-white transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
