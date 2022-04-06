import React from 'react';

type Props = {};

function FeedbackPeg(pops: Props) {
    const colors = ['gray-700', 'red-600', 'amber-600', 'green-600'];

    return <div id={`feedbackPeg_${null}`} className='h-3 w-3 border-2 border-gray-300 rounded-3xl bg-gray-700'></div>;
}

export default FeedbackPeg;
