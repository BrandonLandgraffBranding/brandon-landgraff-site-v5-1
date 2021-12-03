import React from 'react';

import Banner from '../components/banner';
import Reviews from '../components/reviews';
import Bio from '../components/bio';
import Stats from '../components/stats';
import Capabilities from '../components/capabilities';
import Faq from '../components/accordion';

import Layout from '../components/layout'

import ScrollProvider from '../components/locomotivescrollprovider'

const Home = () => {

    return (
        <ScrollProvider>
          <Layout>
            <Banner />
            <Capabilities />
            <Reviews />
            <Bio />
            <Stats />
            <Faq />
          </Layout>  
        </ScrollProvider> 
    );
};

export default Home