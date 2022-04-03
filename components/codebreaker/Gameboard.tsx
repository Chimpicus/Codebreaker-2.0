import React from 'react';
import GameRow from './GameRow';

type Props = {};

function Gameboard({}: Props) {
    const rowId = [0, 1, 2, 3, 4];

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {rowId.map((row) => (
                <GameRow />
            ))}
        </div>
    );
}

export default Gameboard;
