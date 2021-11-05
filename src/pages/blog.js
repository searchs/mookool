// Step 1: Import React
import * as React from 'react';
import Layout from '../components/Layout';

// Step 2: Define your component
const BlogPage = () => {
  return (
    <Layout pageTitle='MooKool Posts'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

// Step 3: Export your component
export default BlogPage;
