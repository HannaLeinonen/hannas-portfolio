import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                    siteUrl
                    title
                }
            }
        }
    `)
    return (
        <Helmet>
            <title>
                {title} | {data.site.siteMetadata.title}
            </title>
            <meta
                name="description"
                content={data.site.siteMetadata.description}
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </Helmet>
    )
}

export default Seo
