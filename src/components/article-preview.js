import React from "react";
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

// function ColourChange () {
// //navbar scroll when active state
// const [article__container, setWhite] = useState(false)

// //navbar scroll changeBackground function
// const changeBackground = () => {
//   console.log(window.scrollY)
//   if (window.scrollY >= 1000) {
//       setWhite(true)
//   } else {
//       setWhite(false)
//   }
// }

// useEffect(() => {
//   changeBackground()
//   // adding the event when scroll change background
//   window.addEventListener("scroll", changeBackground)
// })

// }

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  

  return (
    <Container>
      {/* <div className={article__container ? 'article__container activeWhite' : 'article__container'}> */}
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                <h2 className={styles.title}>{post.title}</h2>
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
          )
        })}
      </ul>
      {/* </div> */}
    </Container>
  )
}

export default ArticlePreview
