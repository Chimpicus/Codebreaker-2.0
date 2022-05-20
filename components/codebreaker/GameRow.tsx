import React from 'react';
import GamePiece from './GamePiece';

type GameRowProps = {
    id: number;
    key: number;
    value: number;
    isActive: boolean;
};

const GameRow: React.FC<GameRowProps> = ({ id, key, value, isActive }) => {
    return (
        <div className='flex m-1 px-2 bg-slate-700 rounded-md shadow-lg shadow-gray-700'>
            <div id={`row_${null}`} className='w-10/12 h-12 flex justify-around'>
                {Array.from({ length: 6 }).map((i) => (
                    <>
                        <div className='flex justify-around items-center'>
                            <GamePiece key={i} id={i} value={i} rowId={i} />
                        </div>
                    </>
                ))}
            </div>
            <div className=' flex justify-center items-center m-1'>
                <button className='p-1 my-1 rounded-md font-mono text-sm text-gray-300 bg-gray-800 shadow-md hover:shadow-sm hover:text-green-200 transition-all select-none border-2 border-slate-500 hover:border-green-200'>
                    Entr
                </button>
            </div>
        </div>
    );
};

export default GameRow;
