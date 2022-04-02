import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Gameboard from '../components/codebreaker/Gameboard';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className=''>
            <Gameboard />
        </div>
    );
};

export default Home;
