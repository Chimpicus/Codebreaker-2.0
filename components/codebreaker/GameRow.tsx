import React from 'react';
import GamePeg from './GamePeg';

function GameRow() {
    const PegIds = [0, 1, 2, 3, 4, 5];
    return (
        <div className='flex m-1 px-2 bg-slate-700 rounded-md shadow-lg shadow-gray-700'>
            <div id='row' className='w-80 h-12 flex justify-around'>
                {PegIds.map(() => (
                    <>
                        <div className='flex justify-around items-center'>
                            <GamePeg />
                        </div>
                    </>
                ))}
            </div>
            <div className=' flex justify-center items-center m-1'>
                <button className='p-2 rounded-md  font-mono text-sm text-gray-300 bg-gray-800 shadow-md hover:shadow-sm hover:text-green-200 transition-all select-none'>
                    Entr
                </button>
            </div>
        </div>
    );
}

export default GameRow;
