import React from 'react';
import GameRow from './GameRow';

function Gameboard() {
    const row = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            {row.map((row) => (
                <GameRow id={row.id} />
            ))}
        </div>
    );
}

export default Gameboard;
