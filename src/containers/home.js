import React from 'react';

import Banner from '../components/banner';
import Featured from '../components/featured';
// import Projects from '../components/projects';
import Faq from '../components/accordion';

// import Lottie from '../components/diagram';

import Layout from '../components/layout'

import ScrollProvider from '../components/locomotivescrollprovider'

const Home = () => {

    return (
        <ScrollProvider>
          <Layout>
            <Banner />
            <Featured />
            {/* <Projects /> */}
            <Faq />
          </Layout>  
        </ScrollProvider> 
    );
};

export default Home