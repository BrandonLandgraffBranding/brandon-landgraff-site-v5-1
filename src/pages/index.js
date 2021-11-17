import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Banner from '../components/banner';
import Reviews from '../components/reviews';
import Bio from '../components/bio';
import Diagram from '../components/diagram';
import BlogIntro from '../components/blogintro';
// import Stats from '../components/stats';

import Layout from '../components/layout'
// import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

import LocomotiveScroll from "locomotive-scroll";

class RootIndex extends React.Component {

  componentDidMount() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".main-container"),
      smooth: true
    });
  }
  
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (

      <Layout location={this.props.location}>
        <div className='main-container' id='main-container' data-scroll-container>

        <Banner />
        <Reviews />
        <Bio />
        <Diagram />
        <BlogIntro />
        {/* <Stats /> */}
        
        {/* <Hero
          image={author.heroImage.gatsbyImageData}
          title={author.name}
          content={author.shortBio.shortBio}
        /> */}
        <ArticlePreview posts={posts} />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
