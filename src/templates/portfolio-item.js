import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    container,
    imageGallery,
    heading,
    divider,
    contentContainer,
    imageWrapper,
    projectContent,
    techContainer
} from '../styles/portfolio.module.css'
import Seo from '../components/seo'
const PortfolioItemTemplate = ({ data }) => {
    const { title, description, images, image, technologies } =
        data.contentfulPortfolioItem
    const gatsbyImage = getImage(image)

    return (
        <Layout>
            <Seo title={title}></Seo>
            <div className={container}>
                <h1 className={heading}>{title}</h1>
                <div className={divider}></div>

                <section className={contentContainer}>
                    <aside>
                        <GatsbyImage
                            image={gatsbyImage}
                            alt={image.title}
                            className={imageWrapper}
                        ></GatsbyImage>
                    </aside>
                    <article className={projectContent}>

                        <p >{description.description}</p>

                        {/* Technologies list */}
                        {technologies && technologies.length > 0 && (
                            <div className={techContainer}>
                                <h3>Technologies: </h3>
                                <ul>
                                    {technologies.map((tech, techIndex) => (
                                        <li key={techIndex}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </article>
                </section>

                {/* Gallery content */}
                <h3 className={heading}>Gallery</h3>
                <div className={divider}></div>
                <section className={imageGallery}>
                    {images.map((img, index) => {
                        const gatsbyImage = getImage(img)
                        return (
                            <a
                                href={img.publicUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                <GatsbyImage
                                    image={gatsbyImage}
                                    className={imageWrapper}
                                    alt={`additional image ${
                                        index + 1
                                    } for ${title}`}
                                />
                            </a>
                        )
                    })}
                </section>
            </div>
        </Layout>
    )
}

export default PortfolioItemTemplate



export const query = graphql`
    query ($slug: String!) {
        contentfulPortfolioItem(slug: { eq: $slug }) {
            title
            technologies
            description {
                description
            }
            image {
                gatsbyImageData(layout: CONSTRAINED, width: 200, placeholder: BLURRED)
                title
                publicUrl
            }
            images {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                title
                publicUrl

            }
        }
    }
`
