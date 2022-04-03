import React, { useState } from 'react';
import GamePeg from './GamePeg';
import FeedbackPeg from './FeedbackPeg';

type Props = {};

function GameRow({}: Props) {
    return (
        <div className='flex border-2 p-2 bg-slate-500 border-gray-300 rounded-md shadow-lg shadow-gray-700'>
            <div id='row' className='w-80 h-12 flex flex-col justify-around'>
                <div className='flex justify-around my-1'>
                    <GamePeg />
                </div>

                <div className='flex justify-around items-center'>
                    <FeedbackPeg />
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <button className='p-1 rounded-md border-2 border-gray-300 font-mono text-sm text-gray-300 bg-gray-700 hover:bg-gray-800 hover:text-green-200'>Enter</button>
            </div>
        </div>
    );
}

export default GameRow;
