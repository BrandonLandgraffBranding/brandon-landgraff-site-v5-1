import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import gsap from 'gsap'
import SplitText from '../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../components/hooks/useOnScreen.js'

import ScrollProvider from '../components/locomotivescrollprovider'

import Layout from '../components/layout';
import Container from '../components/container';
import Back from '../components/navigationback.js'

import './project.css'
import '../components/global.css'

const BlogTemplate = (props) => {

        //Reveal Second Animation
        const refsecond = useRef();

        const [revealsecond, setSecondReveal] = useState(false);
    
        const onSecondScreen = useOnScreen(refsecond);
    
        useEffect(()=>{
          if(onSecondScreen) setSecondReveal(onSecondScreen);
        }, [onSecondScreen]);
    
        useEffect(() => {
          if(revealsecond){
    
            const split = new SplitText("#second-text", {
              type: "lines",
            });
    
            gsap.to(split.lines, {
              duration: 1,
              y: -50,
              opacity: 1,
              stagger: 0.5,
              ease: "power2",
              delay: 1,
            });
    
          }
        }, [revealsecond]);

    return (
      <ScrollProvider>
        <Layout>
        <Back />
          <section className='vh-100' data-scroll-section>
            <SEO title={props.data.contentfulBlog.seoTitle} description={props.data.contentfulBlog.seoDescription} keywords={props.data.contentfulBlog.seoKeywords} />
              <div className='blog__header'>
                  <div className='blog-img'>
                    <div className='blog-img-container' style={{backgroundImage:  `url(${props.data.contentfulBlog.featuredImage.fluid.src})`}} data-scroll/>
                  </div>
              </div>
              <Container>
              <div className='project__wrapper'>
                  <div className='project__title__wrapper'>
                      <h1 className='project__text__animate' data-scroll>{props.data.contentfulBlog.title}</h1>
                      <h4 className='project__text__animate' data-scroll>
                        <div dangerouslySetInnerHTML={
                            {__html: `${props.data.contentfulBlog.contentdetails.childMarkdownRemark.html}`}
                        } />
                      </h4>
                  </div>

                  <div className='project__two__column'>
                    <div>
                      <div id='project__line' className='line-container'>
                          <div className='line-div' data-scroll/>
                      </div>
                      <h2 id='project__subheader' className='project__text__animate' data-scroll>Overview</h2>
                    </div>
                    <div>
                      <p className='project__text__animate' data-scroll>
                        <div dangerouslySetInnerHTML={
                            {__html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`}
                        } />
                      </p>
                    </div>
                  </div>

                  <div className='project__two__column'>
                    <div>
                      <div id='project__line' className='line-container'>
                          <div className='line-div' data-scroll/>
                      </div>
                      <h2 id='project__subheader' className='project__text__animate' data-scroll>Process</h2>
                    </div>
                    <div>
                      <p className='project__text__animate' data-scroll>
                        <div dangerouslySetInnerHTML={
                            {__html: `${props.data.contentfulBlog.contentprocess.childMarkdownRemark.html}`}
                        } />
                      </p>
                    </div>
                  </div>
                  <div className='project__two__column-img'>
                    <h4>Snapshot of Work in Progress</h4>
                    <div className='blog-img'>
                      <div className='blog-img-container' style={{backgroundImage:  `url(${props.data.contentfulBlog.processimage.fluid.src})`}} data-scroll/>
                    </div>
                  </div>

                  <div className='project__two__column'>
                    <div>
                      <div id='project__line' className='line-container'>
                          <div className='line-div' data-scroll/>
                      </div>
                      <h2 id='project__subheader' className='project__text__animate' data-scroll>Results</h2>
                    </div>
                    <div>
                      <p className='project__text__animate' data-scroll>
                        <div dangerouslySetInnerHTML={
                            {__html: `${props.data.contentfulBlog.contentresults.childMarkdownRemark.html}`}
                        } />
                      </p>
                    </div>
                  </div>
                  <div className='project__two__column-img'>
                    <h4>Snapshot of Final Result</h4>
                    <div className='blog-img'>
                      <div className='blog-img-container' style={{backgroundImage:  `url(${props.data.contentfulBlog.resultsimage.fluid.src})`}} data-scroll/>
                    </div>
                  </div>


                  <div className='blog__content'>
            
                  </div>
              </div>
              </Container>
          </section>
        </Layout>
      </ScrollProvider>
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
     contentprocess {
      childMarkdownRemark {
        html
      }
     }
     contentresults {
      childMarkdownRemark {
        html
      }
     }
     contentdetails {
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
       fluid(maxWidth: 4000, quality: 100) {
         ...GatsbyContentfulFluid
         src
       }
     }
      processimage {
        fluid(maxWidth: 4000, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
      resultsimage {
        fluid(maxWidth: 4000, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
   }
 }
`