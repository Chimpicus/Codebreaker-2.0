import React, { useState } from 'react';

// type Props = {};
type GamePieceProps = {
    id: number;
    key: number;
    rowId: number;
};
interface Event {
    ctrlKey: boolean;
}

const GamePiece: React.FC<GamePieceProps> = ({ id, key, value }) => {
    // const FeedbackColors = [null, 'red', 'amber', 'green'];
    const [piece, setPiece] = useState<GamePieceProps>({
        value: 0
    });
    const handleClick = (e: Event) => {
        if (!e.ctrlKey) {
            if (piece.value === 9) {
                setPiece({
                    value: 0
                });
                return;
            }
            setPiece({ value: piece.value + 1 });
        }
        if (e.ctrlKey) {
            if (piece.value === 0) {
                setPiece({ value: 9 });
                return;
            }
            setPiece({ value: piece.value - 1 });
        }
    };

    return (
        <div
            id={`gamePiece_${row.id}_${id}`}
            className={'flex justify-center items-center border-2 border-gray-300 rounded-3xl bg-gray-700 h-7 w-7 mx-1'}
            onClick={(e) => {
                handleClick(e);
            }}
        >
            <span className='flex justify-center items-center select-none text-cyan-200'>{piece.value}</span>
        </div>
    );
};

export default GamePiece;
