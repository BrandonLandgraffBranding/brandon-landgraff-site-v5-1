import React, { useState, useRef, useEffect } from 'react';

import Banner from '../components/banner';
import Reviews from '../components/reviews';
import Bio from '../components/bio';
// import Diagram from '../components/diagram';
import Capabilities from '../components/capabilities';
import Stats from '../components/stats';

import Layout from '../components/layout'

import useLocoScroll from '../components/hooks/useLocoScroll';
// import '../components/hooks/locomotive-scroll.css';
// import useLocoScrollColor from '../components/hooks/useLocoScrollColor';

// import ImagesLoaded from 'react-images-loaded';

const Home = () => {

  // componentDidMount() {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector(".main-container"),
  //     smooth: true
  //   });
  // }

  const [preloader, setPreloader] = useState(true);

  // useLocoScrollColor(!preloader);
  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(3);
  // const [timerColor, setColorTimer] = useState(3);

  const id = useRef(null);
  // const idColor = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
    // console.log('starting color')  
  }

  useEffect(() => {
    id.current = window.setInterval(()=>{
      setTimer((timer) => timer - 1);
    }, 1000)
  },[])

  useEffect(() => {
    if(timer === 0){
      clear();
    }
  },[timer])

  // ImagesLoaded( document.querySelector('#main-container'), function() {
  //   console.log('all images are loaded');
  // });

    return (
      <>
      {preloader ? ( <div className='loader-wrapper absolute'>
        <h1>Brandon Landgraff</h1>
        <h3>Full Stack Designer</h3>
      </div> 
      ) : (
        <div className='main-container' id='main-container' data-scroll-container>
        <Layout>
        <Banner />
        <Reviews />
        <Bio />
        {/* <Diagram /> */}
        <Capabilities />
        <Stats /> 
        </Layout>   
      </div>
      )}
      </>
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