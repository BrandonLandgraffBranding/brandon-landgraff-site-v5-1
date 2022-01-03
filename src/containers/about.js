import React from 'react';

import BlogBanner from '../components/blogbanner/blogbanner';
import FullStackDesigner from '../components/fullstackdesigner';
// import Reviews from '../components/reviews';
import Bio from '../components/bio';
import Stats from '../components/stats';
import Capabilities from '../components/capabilities';
// import Featured from '../components/featured';
// import Projects from '../components/projects';
import Faq from '../components/accordion';

import Back from '../components/navigationback.js'

// import Lottie from '../components/diagram';

import Layout from '../components/layout'

import ScrollProvider from '../components/locomotivescrollprovider'

const About = () => {

    return (
        <ScrollProvider>
          <Layout>
            <Back />
            <BlogBanner />
            <Bio />
            <FullStackDesigner />
            <Capabilities />
            {/* <Lottie /> */}
            {/* <Reviews /> */}
            <Stats />
            {/* <Featured /> */}
            {/* <Projects /> */}
            <Faq />
          </Layout>  
        </ScrollProvider> 
    );
};

export default About