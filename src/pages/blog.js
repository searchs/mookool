// Step 1: Import React
import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

// Step 2: Define your component
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Blog Posts'>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

// Step 3: Export your component
export default BlogPage;
