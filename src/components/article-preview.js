import React from 'react'

// import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'

import Tags from './tags'
import './article-preview.css'

const ArticlePreview = ({ posts }) => {

  // Adding Posts
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <section className='blog-item-wrapper vh-100' data-scroll-section>
    <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
    data-scroll-id="#FCFCFC" />
    <Container>
      <ul className='article-list'>
        {posts.map((post) => {
          return (
            <div className='blog-item'>
              <li key={post.slug}>
                <a href={`/blog/${post.slug}`} className='blog-link'>
                    <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} data-scroll/>
                  <h2 id='blog-title'>{post.title}</h2>
                </a>
                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: post.description.childMarkdownRemark.html,
                  }}
                /> */}
                <div className='meta'>
                  <small className="meta">{post.publishDate}</small>
                  <Tags tags={post.tags} />
                </div>
              </li>
            </div>
          )
        })}
      </ul>
    </Container>
    </section>
  )
}

export default ArticlePreview
