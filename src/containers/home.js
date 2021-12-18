import React from 'react';

import Banner from '../components/banner';
import FullStackDesigner from '../components/fullstackdesigner';
// import Reviews from '../components/reviews';
import Bio from '../components/bio';
import Stats from '../components/stats';
import Capabilities from '../components/capabilities';
// import Featured from '../components/featured';
// import Projects from '../components/projects';
import Faq from '../components/accordion';

import Layout from '../components/layout'

import ScrollProvider from '../components/locomotivescrollprovider'

const Home = () => {

    return (
        <ScrollProvider>
          <Layout>
            <Banner />
            <FullStackDesigner />
            <Capabilities />
            {/* <Reviews /> */}
            <Bio />
            <Stats />
            {/* <Featured /> */}
            {/* <Projects /> */}
            <Faq />
          </Layout>  
        </ScrollProvider> 
    );
};

export default Home