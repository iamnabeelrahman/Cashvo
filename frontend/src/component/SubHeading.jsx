import React from 'react';

export function SubHeading({ label }) {
  return (
    <div className="font-bold text-4xl text-center text-gray-800 pb-6">
      {label}
    </div>
  );
}

export function HeadingPara({ label }) {
  return (
    <div className="text-gray-500 text-md pt-1 px-4 pb-6 text-center">
      {label}
    </div>
  );
}
