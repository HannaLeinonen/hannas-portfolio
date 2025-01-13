import * as React from 'react'
import Header from './header'
import { container } from "../styles/layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={container}>

            <Header></Header>
            <main>

                {children}
            </main>
        </div>
    )
}

export const Head = () => <title>Home Page</title>

export default Layout
