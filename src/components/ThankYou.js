import React from 'react'
import Layout from './layout'

const ThankYouPage = ({ title, description }) => {
    return (
        <Layout>
            <h1>{title}</h1>
            <p>{description}</p>

        </Layout>
    )
}

export default ThankYouPage
