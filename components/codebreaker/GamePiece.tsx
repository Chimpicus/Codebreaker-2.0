import React, { ReactNode, useState } from 'react';
import GameRow from './GameRow';

// type Props = {};
interface GamePieceProps {
    pieceId: number;
    value: number;
    rowId: number;
}
interface Event {
    ctrlKey: boolean;
}

const GamePiece: React.FC<GamePieceProps> = ({ pieceId, rowId }) => {
    // const FeedbackColors = [null, 'red', 'amber', 'green'];
    const [piece, setPiece] = useState<GamePieceProps>({
        pieceId: pieceId,
        value: 0,
        rowId: rowId
    });
    const handleClick = (e: Event) => {
        if (!e.ctrlKey) {
            if (piece.value === 9) {
                setPiece({
                    pieceId: pieceId,
                    value: 0,
                    rowId: rowId
                });
                return;
            }
            setPiece({ value: piece.value + 1, pieceId: pieceId, rowId: rowId });
        }
        if (e.ctrlKey) {
            if (piece.value === 0) {
                setPiece({ pieceId: pieceId, value: 9, rowId: rowId });
                return;
            }
            setPiece({ pieceId: pieceId, value: piece.value - 1, rowId: rowId });
        }
    };
    return (
        <div
            id={`gamePiece_${rowId}_${pieceId}`}
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
