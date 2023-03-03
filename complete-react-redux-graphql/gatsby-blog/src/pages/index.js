import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #ff5964;
`

const IndexPage = ({ data }) => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/spyware.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <div>
        <h1>AD0x99's Thoughts</h1>
      </div>
    </div>

    <ul className={styles.list}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogLink to={node.fields.slug}>
          <li key={node.id} className={styles.listItem}>
            <BlogTitle className={styles.listItemLink}>
              {node.frontmatter.title} ↗
            </BlogTitle>
            <p className={styles.listItemDescription}>
              {node.frontmatter.date}
            </p>
          </li>
        </BlogLink>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            description
            title
          }
          excerpt
          id
          html
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
