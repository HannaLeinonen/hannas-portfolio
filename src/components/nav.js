import * as React from 'react'
import { Link } from 'gatsby'
import {
    navigationList,
    navigation,
    borderWrapper,
    home,
    homeTitle,
    homeIcon,
    active
} from '../styles/layout.module.css'

const Navigation = () => {


    return (
        <div className={borderWrapper}>
            <nav className={navigation}>
                <ul className={navigationList}>
                    <li className={`navLink, ${home}`}>
                        <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className={`bi bi-house ${homeIcon}`}
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                            </svg>
                            <span className={homeTitle}>Home</span>
                        </Link>
                    </li>
                    <li className='navLink'>
                        <Link activeClassName={active} to="/portfolio">Portfolio</Link>
                    </li>
                    <li className='navLink'>
                        <Link activeClassName={active} to="/about-me">About me</Link>
                    </li>
                    <li className='navLink'>
                        <Link activeClassName={active} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
