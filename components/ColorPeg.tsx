import React from 'react';

type Props = {};

function ColorPeg({}: Props) {
  const background = 'gray-700';
  return <div className={`h-8 w-8  border-2 border-gray-300 rounded-3xl bg-${background}`}></div>;
}

export default ColorPeg;
