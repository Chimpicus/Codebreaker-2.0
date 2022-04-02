import React from 'react';

type Props = {};

function FeedbackPeg({}: Props) {
    const colors = ['gray-700', 'red-600', 'amber-600', 'green-600'];

    return <div id='feedbackPeg' className={`h-3 w-3 border-2 border-gray-300 rounded-3xl bg-${colors[0]}`}></div>;
}

export default FeedbackPeg;
