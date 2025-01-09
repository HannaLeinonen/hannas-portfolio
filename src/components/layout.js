import * as React from 'react'
/* import { Link } from 'gatsby' */
import { container } from "../styles/layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={container}>
            <header></header>
            <main>
                <div className="blob"></div>
                {children}
            </main>
            <footer></footer>
        </div>
    )
}

export const Head = () => <title>Home Page</title>

export default Layout
