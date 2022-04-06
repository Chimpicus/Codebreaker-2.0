import React from 'react';
import GameRow from './GameRow';

function Gameboard() {
    const rowId = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            {rowId.map((row) => (
                <GameRow />
            ))}
        </div>
    );
}

export default Gameboard;
