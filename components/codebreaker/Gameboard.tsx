import React from 'react';
import GameRow from './GameRow';

type Props = {
    id: number;
    key: number;
    isActive: boolean;
};

const Gameboard: React.FC<Props> = ({ id, key, isActive }) => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            {Array.from({ length: 6 }).map((i) => (
                <GameRow id={i} key={i} />
            ))}
        </div>
    );
};

export default Gameboard;
