import React from "react";
import { Link } from "react-router-dom";

function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="py-3 text-sm flex justify-center text-gray-600">
      <div>{label}</div>
      <Link className="ml-1 text-indigo-600 hover:text-indigo-800 font-semibold" to={to}>
        {buttonText}
      </Link>
    </div>
  );
}

export default BottomWarning;
