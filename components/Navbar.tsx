import React from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <div className='w-full  px-4 py-1.5 h-10 bg-gray-800 flex font-mono text-green-300'>
      <h1 className=''>Codebreaker</h1>
    </div>
  );
}

export default Navbar;
