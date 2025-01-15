import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { portfolioItems, portfolioItem, imageWrapper, divider, heading } from "../../styles/portfolio.module.css"
const PortfolioPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioItem {
                nodes {
                    title
                    slug
                    image {
                        gatsbyImage(
                            layout: CONSTRAINED,
                            width: 175,
                            height: 378,
                            placeholder: BLURRED
                            )
                    }
                }
            }
        }
    `)
    const items = data.allContentfulPortfolioItem.nodes

    return (
        <Layout>
            <div >
                <h1 className={heading}>Projects</h1>
                <div className={divider}></div>
                <div className={portfolioItems}>
                    {/* Iterera över items och rendera bild + länk */}
                    {items.map((item) => {
                        const image = getImage(item.image)
                        return (
                            <article key={item.slug} className={portfolioItem}>
                                <h2>
                                    <Link to={`/portfolio/${item.slug}`}>
                                        {item.title}
                                    </Link>
                                    <div className={divider}></div>
                                </h2>
                                <GatsbyImage className={imageWrapper} image={image} alt={`Image of ${item.title}`} />
                            </article>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default PortfolioPage

export const Head = () => <Seo title="Portfolio"></Seo>
