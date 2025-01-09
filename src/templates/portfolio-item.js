import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PortfolioItemTemplate = ({ data }) => {
    const { title, image, images } = data.contentfulPortfolioItem
    const gatsbyImage = getImage(image)

    return (
        <Layout>
            <h1>{title}</h1>
            <GatsbyImage
                image={gatsbyImage}
                alt="Hur löser vi detta?"
            ></GatsbyImage>

            <div className='imageGallery'>
                {images.map((img, index) => {
                    const gatsbyImage = getImage(img);
                    return (
                        <GatsbyImage key={index} image={gatsbyImage} alt={`additional image ${index + 1} for ${title}`}/>
                    )
                })}
            </div>
        </Layout>
    )
}

export default PortfolioItemTemplate

export const query = graphql`
    query ($slug: String!) {
        contentfulPortfolioItem(slug: { eq: $slug }) {
            title
            image {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 200
                )
            }
            images {
                gatsbyImageData(
                    layout: CONSTRAINED

                    width: 200
                )
            }
        }
    }
`
