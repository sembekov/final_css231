import React from "react";

function Notification({ message, type, onClose }) {
  const notificationStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`fixed top-4 right-4 text-white py-2 px-4 rounded shadow-lg ${notificationStyles[type]}`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-lg font-bold">
          &times;
        </button>
      </div>
    </div>
  );
}

export default Notification;
