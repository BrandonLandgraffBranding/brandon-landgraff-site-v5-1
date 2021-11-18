import React, { useState, useRef, useEffect } from 'react';

import Banner from '../components/banner';
import Reviews from '../components/reviews';
import Bio from '../components/bio';
import Diagram from '../components/diagram';
import BlogIntro from '../components/blogintro';
// import Stats from '../components/stats';

import Layout from '../components/layout'

import useLocoScroll from '../components/hooks/useLocoScroll';
import '../components/hooks/locomotive-scroll.css';
// import useLocoScrollColor from '../components/hooks/useLocoScrollColor';

const Home = () => {

  // componentDidMount() {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector(".main-container"),
  //     smooth: true
  //   });
  // }

  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);
  // useLocoScrollColor(!preloader);

  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
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

    return (
      <>
      {preloader ? ( <div className='loader-wrapper absolute'>
        <h1>Brandon Landgraff</h1>
        <h3>Full Stack Designer</h3>
      </div> 
      ) : (
      <Layout>
        <div className='main-container' id='main-container' data-scroll-container>
        <Banner />
        <Reviews />
        <Bio />
        <Diagram />
        <BlogIntro />
        {/* <Stats /> */}
        </div>
      </Layout>
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
