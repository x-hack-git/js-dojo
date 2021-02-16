import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Image from "gatsby-image"
// import styled from "styled-components"

// const BannerImage = styled(Image)`
//   border-radius: 10px;
//   max-width: 400px;
//   margin-top: 20px;
// `

export default props => {
  const { allMdx } = useStaticQuery(graphql`
    query MyQuery {
      allMdx (filter: {slug: {regex: "/javascript_basics\/tutorials/"}}) {
        nodes {
          slug
          frontmatter {
            title
            slug
            tags
            date
            banner
          }
        }
      }
    }
  `)

  console.log(allMdx.nodes)

  return (
    allMdx.nodes.map(_ => {
      return (
        <Link key={_.frontmatter.title} to={_.frontmatter.slug}>
          <p style={{ backgroundColor: `purple` }}>
            {/* {_.frontmatter.banner && (
              <BannerImage
                // fluid={mdx.frontmatter.banner.childImageSharp.fluid}
                alt="Banner Image"
              />
            )} */}
            <img src={_.frontmatter.banner} className="" style={{ width: `240px` }}></img>
            <h4>{_.frontmatter.title}</h4>
          </p>
          {/* <img src={_.frontmatter.banner.childImageSharp.fluid} className="" style={{ width: `240px` }}></img> */}
        </Link>
      )
    })
  );
}
