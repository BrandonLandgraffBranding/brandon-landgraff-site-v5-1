import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Container from '../components/container';
import SEO from '../components/seo';

import './project.css'

import Brandon from '../images/brandon.webp'

const BlogTemplate = (props) => {
    return (
        <Layout>
          <Container>
            <SEO title={props.data.contentfulBlog.seoTitle} description={props.data.contentfulBlog.seoDescription} keywords={props.data.contentfulBlog.seoKeywords} />
            <div className='blog__header'>
                <div className='img-container'>
                  <div className='blog-img-container' style={{backgroundImage:  `url(${props.data.contentfulBlog.featuredImage.fluid.src})`}}></div>
                  {/* <img src={`url(${props.data.contentfulBlog.featuredImage.fluid.src})`} alt="Brandon Landgraff"/> */}
                </div>
                <div className='blog__info'>
                    <h1 className='blog__title'>{props.data.contentfulBlog.title}</h1>
                </div>
            </div>
            <div className='blog__wrapper'>
                <div className='blog__content'>
                    <div dangerouslySetInnerHTML={
                        {__html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`}
                    } />
                </div>
            </div>
          </Container>
        </Layout>
    )
}

export default BlogTemplate;


export const query = graphql`
 query BlogTemplate($id: String!) {
   contentfulBlog(id: {eq: $id}) {
     title
     id
     slug
     content {
       childMarkdownRemark {
         html
       }
     }
     seoTitle
     seoDescription
     seoKeywords
     seoImage {
       fluid(maxWidth: 1200, quality: 100) {
         ...GatsbyContentfulFluid
         src
       }
     }
     featuredImage {
       fluid(maxWidth: 1200, quality: 100) {
         ...GatsbyContentfulFluid
         src
       }
     }
   }
 }
`