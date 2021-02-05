import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default props => {
  const { allMdxPage } = useStaticQuery(graphql`
    query {
      allMdxPage {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
console.log(allMdxPage);
  return (
    allMdxPage.edges.map(_ => {
      return (
        <Link key={_.node.title} to={_.node.slug}>
          <p>{_.node.title}</p>
        </Link>
      )
    })
  );
}
