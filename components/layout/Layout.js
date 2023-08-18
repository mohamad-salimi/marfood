import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//Styles
import styles from './Layout.module.css'

const Layout = ({children}) => {
       
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsTransparent(false);
        } else {
            setIsTransparent(true);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.mainContainer}>
            <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
                <div className={styles.left}>
                    <Link href='/'>Marfood</Link>
                </div>
                <div className={styles.right}>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/categories'>Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a 
                href='https://snappfood.ir'
                target='_blank'
                rel='noreferrer'
                >Marfood 
                </a>
                Next.js Course | Marfood Project &copy;
            </footer>
        </div>
    );
};

export default Layout;