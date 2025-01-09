import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const PortfolioPage = ({ data }) => {
    const items = data.allContentfulPortfolioItem.nodes

    return (
        <Layout>
            <div>
                <h1>Portfolio page</h1>
                <ul>
                    {items.map((item) => (
                        <li key={item.slug}>
                            <Link to={`/portfolio/${item.slug}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allContentfulPortfolioItem {
            nodes {
                title
                slug
            }
        }
    }
`
export default PortfolioPage

export const Head = () => <Seo title="Portfolio"></Seo>
