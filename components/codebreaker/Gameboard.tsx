import React from 'react';
import GameRow from './GameRow';

type GameBoardProps = {
    id: number;
    key: number;
    isActive: boolean;
};

const Gameboard: React.FC<GameBoardProps> = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            {Array.from({ length: 6 }).map((gameRow, i) => (
                <GameRow key={i} id={i} isActive={false} />
            ))}
        </div>
    );
};

export default Gameboard;
