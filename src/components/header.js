import React from 'react';
import {Link} from 'gatsby'; 

//import './headers.module.scss';
import headerStyles from './headers.module.scss'

const Header = () => {

    return(
        <header className={headerStyles.header}>
        <h1>
            <Link className={headerStyles.title} to='/'>
                YashDalvi
            </Link>
        </h1>
            <nav>
                <ul className={headerStyles.nav_list}>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blogs  </Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact  </Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About  </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;