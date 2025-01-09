import * as React from 'react'
import { Link } from 'gatsby'
import { navigationList, navigation, borderWrapper } from "../styles/layout.module.css"

const Navigation = () => {
    return (
        <div className={borderWrapper}>
            <nav className={navigation}>
            <ul className={navigationList}>
					<li id='home'>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link to="/about-me">About me</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
        </nav>
        </div>
    )
}

export default Navigation
