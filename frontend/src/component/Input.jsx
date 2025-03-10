import React from 'react';

function Input({ label, placeholder }) {
  return (
    <div className="w-full mb-4">
      <div className="text-sm font-medium text-left py-1 text-slate-700">
        {label}
      </div>
      <input
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Input;
