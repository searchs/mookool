// Step 1: Import React
import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

// Step 2: Define your component
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Blog Posts'>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

// Step 3: Export your component
export default BlogPage;
