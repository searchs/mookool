import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='MooKool Landings'>
      <p>Making the Frontend piece super fast with Gatsby!</p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
      />
    </Layout>
  );
};

export default IndexPage;
