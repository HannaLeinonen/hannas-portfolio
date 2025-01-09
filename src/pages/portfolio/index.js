import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, useStaticQuery, graphql } from 'gatsby'

const PortfolioPage = () => {
    const data = useStaticQuery(graphql`
		query {
			allContentfulPortfolioItem {
				nodes {
					title
					slug
				}
			}
		}
	`);

    const items = data.allContentfulPortfolioItem.nodes;

    return (
        <Layout>
            <div>
                <h1>Portfolio page</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.slug}>
                        <Link to={`/portfolio/${item.slug}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            </div>
        </Layout>
    )
}

export default PortfolioPage

export const Head = () => <Seo title="Portfolio"></Seo>
