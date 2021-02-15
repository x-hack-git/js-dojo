const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode })

        // Extend another node. The new node field is placed under the 'fields' key on the extended node object.
        createNodeField({
            // Name of the field adding
            name: "slug",
            // Individual MDX node
            node,
            // Generated value based on filepath.
            value: `/blog${value}`,
        })
    }
}