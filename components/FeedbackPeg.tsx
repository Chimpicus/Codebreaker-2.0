import React from 'react';

type Props = {};

function FeedbackPeg({}: Props) {
  let background = 'gray-700';
  return <div className={`h-3 w-3 border-2 border-gray-300 rounded-3xl bg-${background}`}></div>;
}

export default FeedbackPeg;
