import React, { useState, useRef, useEffect } from 'react';

import Banner from '../components/banner';
import Reviews from '../components/reviews';
import Bio from '../components/bio';
// import Diagram from '../components/diagram';
import Capabilities from '../components/capabilities';
import FAQ from '../components/accordion';

import Layout from '../components/layout'

import useLocoScroll from '../components/hooks/useLocoScroll';
// import '../components/hooks/locomotive-scroll.css';
// import useLocoScrollColor from '../components/hooks/useLocoScrollColor';

// import ImagesLoaded from 'react-images-loaded';

const Home = () => {

    // const ref = useRef(null);
    // const [preloader, setPreload] = useState(true);
  
  
    // useLocoScroll(!preloader);
  
    // useEffect(() => {
    //   if (!preloader && ref) {
    //     if (typeof window === "undefined" || !window.document) {
    //       return;
    //     }
    //   }
    // }, [preloader]);
  
    // const [timer, setTimer] = React.useState(3);
  
    // const id = React.useRef(null);
  
    // const clear = () => {
    //   window.clearInterval(id.current);
    //   setPreload(false);
    // };
  
    // React.useEffect(() => {
    //   id.current = window.setInterval(() => {
    //     setTimer((time) => time - 1);
    //   }, 1000);
    //   return () => clear();
    // }, []);
  
    // React.useEffect(() => {
    //   if (timer === 0) {
    //     clear();
    //   }
    // }, [timer]);
  
    // if (typeof window === "undefined" || !window.document) {
    //   return null;
    // }

    return (
      // <>
      // {preloader ? ( <div className='loader-wrapper absolute'>
      //   <h1>Brandon Landgraff</h1>
      //   <h3>Full Stack Designer</h3>
      // </div> 
      // ) : (
        // <div className='main-container' id='main-container' data-scroll-container ref={ref}>
        <Layout>
          <Banner />
          <Reviews />
          <Bio />
          {/* <Diagram /> */}
          <Capabilities />
          <FAQ />
          {/* <Accordion
            title="What is your return policy?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Accordion
            title="Which languages does you support?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Accordion
            title="Can I use a custom domain?"
            content="
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          />  */}
        </Layout>   
      // </div>
      // )}
      // </>
    );
};

export default Home

// export const pageQuery = graphql`
//   query HomeQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       nodes {
//         title
//         slug
//         publishDate(formatString: "MMMM Do, YYYY")
//         tags
//         heroImage {
//           gatsbyImageData(
//             layout: FULL_WIDTH
//             placeholder: BLURRED
//             width: 424
//             height: 212
//           )
//         }
//         description {
//           childMarkdownRemark {
//             html
//           }
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       nodes {
//         name
//         shortBio {
//           shortBio
//         }
//         title
//         heroImage: image {
//           gatsbyImageData(
//             layout: CONSTRAINED
//             placeholder: BLURRED
//             width: 1180
//           )
//         }
//       }
//     }
//   }
// `