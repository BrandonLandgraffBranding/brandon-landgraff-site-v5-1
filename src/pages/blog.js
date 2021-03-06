import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/blogbanner/blogbanner'
import ArticlePreview from '../components/article-preview'

import ScrollProvider from '../components/locomotivescrollprovider'

class BlogIndex extends React.Component {

  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    return (
      <ScrollProvider>
        <Layout location={this.props.location}>
          <Seo title="Blog" />
          <Hero />
          <ArticlePreview posts={posts} />
        </Layout>
      </ScrollProvider>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
  }
`
