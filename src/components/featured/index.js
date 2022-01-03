import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './featured.css'

import Chevron from '../../components/dropdown/chevron.js'

import Container from '../container';

export default () => (
   <StaticQuery
     query={graphql` 
 query FeaturedQuery {
   allContentfulBlog(
       limit: 3
       sort: { fields: [createdAt], order: DESC }
       filter: {
       node_locale: {eq: "en-US",}
     }
     ) {
     edges {
       node {
         id
         slug
         title
         shortDescription
         featuredImage {
           fluid(maxWidth: 1200, quality: 85) {
             src
             ...GatsbyContentfulFluid
           }
         }
       }
     }
   }
 }
`}

     render={data => (
       <header>
         <Container>
         {data.allContentfulBlog.edges.map(edge => (
             <div key={edge.node.id} className='header__section'>

              <div className='line-container'>
                <div className='line-div' data-scroll/>
              </div>


               <div className='two-column'>
               
               <div className='header__content_project'>
                 <div className='header__info'>
                   <h1 className='header__title__project' data-scroll>{edge.node.title}</h1>
                   {/* <p className='header__subtitle'>{edge.node.shortDescription}</p> */}
                   <button onClick={() => navigate(`/project/${edge.node.slug}`)} className='btn__project' data-scroll>VIEW PROJECT <Chevron className='chevron-next' width={14} fill={"#4A4A4A"} /></button>
                 </div>
               </div>
               
               {/* <div className='header__hero' style={{backgroundImage: `url(${edge.node.featuredImage.fluid.src})`}}></div> */}
               <div className='img-container-featured'>
                  <div className='blog-img-container-featured' style={{backgroundImage: `url(${edge.node.featuredImage.fluid.src})`}} data-scroll></div>
                  {/* <img src={`url(${props.data.contentfulBlog.featuredImage.fluid.src})`} alt="Brandon Landgraff"/> */}
                </div>
               </div>
             </div>
         ))}
         </Container>
       </header>
     )}
   />
 )