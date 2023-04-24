import { useState } from "react";

const ProductDetails = ({ details }:any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold mb-2">Details</h2>
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleExpansion}
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </div>
      <div className={`${isExpanded ? "block" : "hidden"} mt-2`}>
        <ul className="list-disc list-inside">
          {details.map((detail:any, index:any) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails