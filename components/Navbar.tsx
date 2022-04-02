import React from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <div className='w-full px-4 h-10 flex justify-between items-center bg-gray-800 font-mono text-green-300 shadow-md shadow-gray-700'>
      <h1 className=''>Codebreaker</h1>
      <div className='flex px-4'>
        <button className='px-4'>Stats</button>
        <button className='px-4'>Settings</button>
      </div>
    </div>
  );
}

export default Navbar;
