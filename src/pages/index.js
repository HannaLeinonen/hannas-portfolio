import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioItem {
                nodes {
                    title
                    id
                    images {
                        title
                        description
                    }
                    description {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
            }
        }
    `)
    const portfolioItems = data.allContentfulPortfolioItem.nodes

    return (
        <main>
            <div className="blob"></div>
            <ul>
                {portfolioItems.map((item) => (
                    <li key={item.id}>
                        <h1>{item.title}</h1>
                    </li>
                ))}

            </ul>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
