import React, { useState } from 'react';

// type Props = {};
export interface pegProps {
    value: number;
}

function GamePeg() {
    // const FeedbackColors = [null, 'red', 'amber', 'green'];
    const [peg, setPeg] = useState<pegProps>({
        value: 0
    });
    const handleClick = () => {
        if (peg.value === 9) {
            setPeg({
                value: 0
            });
        } else {
            setPeg({ value: peg.value + 1 });
        }
    };

    return (
        <div
            id={`gamePeg_${null}`}
            className={'flex justify-center items-center border-2 border-gray-300 rounded-3xl bg-gray-700 h-8 w-8'}
            style={
                {
                    /*insert feedback state colour here */
                }
            }
            onClick={() => {
                handleClick();
            }}
        >
            <span className='flex justify-center items-center select-none text-cyan-200'>{peg.value}</span>
        </div>
    );
}

export default GamePeg;
