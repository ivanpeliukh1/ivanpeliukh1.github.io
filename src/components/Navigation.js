import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css'
import { useEffect, useState } from 'react';

function Navigation () {
    const location = useLocation();
    const [curPath, setCurPath] = useState('/regular')
    useEffect(() => {
        setCurPath(location.pathname)
    }, [location.pathname])
    return (
        <section className={styles.section}>
            <nav className={styles.nav_container}>
                <li><Link className={curPath === '/hot' ? styles.active : styles.link } to="/hot">HOT</Link></li>
                <li><Link className={curPath === '/regular' ? styles.active : styles.link } to="/regular">REGULAR</Link></li>
                <li><Link className={curPath === '/add' ? styles.active : styles.link } to="/add">ADD</Link></li>
            </nav>
        </section>
    )
}

export default Navigation;