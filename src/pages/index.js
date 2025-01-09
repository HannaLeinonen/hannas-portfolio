import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, useStaticQuery, Link } from 'gatsby'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioItem {
                nodes {
                    title
                    slug
                }
            }
        }
    `)
const projects = data.allContentfulPortfolioItem.nodes;
    return (
        <Layout>
            <h1>Homepage</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.slug}>
                        <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <Seo title="Home"></Seo>
