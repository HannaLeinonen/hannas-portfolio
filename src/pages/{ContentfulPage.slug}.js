import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AboutPage from "../components/AboutMe";
import ContactPage from "../components/Contact";
import ThankYouPage from "../components/ThankYou";


const Page = ({ data }) => {
    const { slug, title, description, content } = data.contentfulPage;

	switch (slug) {
		case "about-me":
			return <AboutPage title={title} description={description} content={content}></AboutPage>;
		case "contact":
			return (
				<ContactPage title={title} description={description}></ContactPage>
			);
		case "thank-you":
			return (
				<ThankYouPage title={title} description={description}></ThankYouPage>
			);

		default:
			return <Layout>EN DEFAULT PAGE LAYOUT</Layout>;
	}
}

export default Page;
export const query = graphql`
	query ($slug: String!) {
		contentfulPage(slug: { eq: $slug }) {
			title
			slug
            description
            content {
      content
    }
		}
	}
`;
