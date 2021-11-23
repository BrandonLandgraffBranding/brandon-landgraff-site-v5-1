import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import cn from 'classnames';

// import SplitText from '../components/utils/Split3.min.js'
// import useOnScreen from '../components/hooks/useOnScreen.js'

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// import Container from './container'

import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {

  // Scroll Triggers
  // const ref = useRef(null);

  // useEffect(() => {
  //   const sections = gsap.utils.toArray('.blog-item-wrapper');
  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length-1),
  //     ease: 'none',
  //     scrollTrigger:{
  //       start: 'top top',
  //       trigger: ReferenceError.current,
  //     }

  //   })

  // }, []);

  //ref={ref}


  // Adding Posts
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <section className='blog-item-wrapper' data-scroll-section>
    {/* <Container> */}
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <div>
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className={styles.link}>
                    <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} data-scroll/>
                  <h2>{post.title}</h2>
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.description.childMarkdownRemark.html,
                  }}
                />
                <div className={styles.meta}>
                  <small className="meta">{post.publishDate}</small>
                  <Tags tags={post.tags} />
                </div>
              </li>
            </div>
          )
        })}
      </ul>
    {/* </Container> */}
    </section>
  )
}

export default ArticlePreview
