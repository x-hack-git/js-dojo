import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default props => {
  const { allMdxPage } = useStaticQuery(graphql`
    query {
      allMdxPage(filter: {slug: {regex: "/javascript_basics\/[^\/]+$/"}}) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  return (
    allMdxPage.edges.map(_ => {
      return (
        <Link key={_.node.title} to={_.node.slug}>
          <img src={_.node.banner} alt="TOP BANNER" />
          <p>{_.node.title}</p>
        </Link>
      )
    })
  );
}
