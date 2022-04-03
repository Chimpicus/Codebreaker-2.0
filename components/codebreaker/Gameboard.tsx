import React from 'react';
import GameRow from './GameRow';

type Props = {};

function Gameboard({}: Props) {
    let RowId = [0, 1, 2, 3, 4, 5, 6];

    return (
        <div className='flex justify-center items-center h-screen'>
          
            <GameRow />
        </div>
    );
}

export default Gameboard;
