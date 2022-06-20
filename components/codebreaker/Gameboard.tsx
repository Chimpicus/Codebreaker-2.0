import React from 'react';
import GameRow from './GameRow';

const Gameboard: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            {Array.from({ length: 6 })
                .map((gameRow, i) => <GameRow key={i} id={i} isActive={false} />)
                .reverse()}
        </div>
    );
};

export default Gameboard;
