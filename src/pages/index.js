import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { heading, blob } from '../styles/main.module.css'

const IndexPage = () => {
    return (
        <Layout>

                <div className={blob}></div>
                <div className={heading}>
                    <h1>
                        Hanna <span>Leinonen</span>
                    </h1>
                    <h2>Frontend developer</h2>
                </div>
            
        </Layout>
    )
}

export default IndexPage

export const Head = () => <Seo title="Home"></Seo>
