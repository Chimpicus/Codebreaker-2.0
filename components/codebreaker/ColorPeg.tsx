import React, { useState } from 'react';

// type Props = {};
export interface pegProps {
    value: number;
}

function ColorPeg() {
    let colors = ['gray-700', 'blue-400', 'green-400', 'yellow-400', 'red-500', 'indigo-400', 'teal-400', 'fuchsia-400', 'orange-500', 'white'];
    let [peg, setPeg] = useState<pegProps>({
        value: 0,
    });
    const handleClick = () => {
        console.log('PEG CLICKED');
        console.log('pegValue == ' + peg.value);
        if (peg.value === 9) {
            setPeg({
                value: 0,
            });
        } else {
            setPeg({ value: peg.value + 1 });
        }
        console.log(peg);
    };

    return (
        <div
            id='guessPeg'
            className={`h-8 w-8 border-2 border-gray-300 rounded-3xl bg-gray-700 flex justify-center items-center`}
            onClick={() => {
                handleClick();
            }}
        >
            <span className='flex justify-center items-center select-none text-green-200'>{peg.value}</span>
        </div>
    );
}

export default ColorPeg;
