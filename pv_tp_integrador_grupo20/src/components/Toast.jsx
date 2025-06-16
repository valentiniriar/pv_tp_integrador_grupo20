import React, { useEffect } from "react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <p>{message}</p>
      <button onClick={onClose} className="toast-close">
        ×
      </button>
    </div>
  );
};

export default Toast; 