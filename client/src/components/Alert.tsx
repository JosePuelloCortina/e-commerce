import React from 'react';

type AlertProps = {
  message: string;
  type: "green" | "yellow" | "red";
};

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return (
    <div className={`bg-${type}-100 border border-${type}-400 text-${type}-700 px-4 py-3 rounded relative`} role="alert">
      <strong className="font-bold">{type}:</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Alert;