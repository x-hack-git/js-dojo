import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default props => {
  const { allMdxPage } = useStaticQuery(graphql`
    query {
      allMdxPage(filter: {slug: {regex: "/extras\/[^\/]+$/"}}, sort: {order: ASC, fields: slug}) {
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
          {/* <img src={_.node.featuredImage} /> */}
          <p>{_.node.title}</p>
        </Link>
      )
    })
  );
}
