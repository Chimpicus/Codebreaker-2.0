import React from 'react';

type Props = {};

function Footer({}: Props) {
    return (
        <div className='w-full absolute bottom-0  text-sm text-gray-300 flex justify-center'>
            <span>© Chimpicus 2022</span>
        </div>
    );
}

export default Footer;
