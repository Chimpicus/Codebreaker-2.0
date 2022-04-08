import React, { useState } from 'react';

// type Props = {};
interface PieceProps {
    value: number;
}

function GamePeg() {
    // const FeedbackColors = [null, 'red', 'amber', 'green'];
    const [piece, setPiece] = useState<PieceProps>({
        value: 0
    });
    const handleClick = () => {
        if (piece.value === 9) {
            setPiece({
                value: 0
            });
        } else {
            setPiece({ value: piece.value + 1 });
        }
    };

    return (
        <div
            id={`gamePiece_${null}_${null}`}
            className={'flex justify-center items-center border-2 border-gray-300 rounded-3xl bg-gray-700 h-7 w-7 mx-1'}
            style={
                {
                    /*insert feedback state colour here */
                }
            }
            onClick={() => {
                handleClick();
            }}
        >
            <span className='flex justify-center items-center select-none text-cyan-200'>{piece.value}</span>
        </div>
    );
}

export default GamePeg;
