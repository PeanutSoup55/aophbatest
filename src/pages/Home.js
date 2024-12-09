import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import  './Home.css';
import bg1 from '../images/bg1.mp4';
import bg2 from '../images/bg2.mp4';
import bg3 from '../images/bg3.mp4';
import bg4 from '../images/bg4.mp4';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const Home = () => {

  const [currentVideoOne, setCurrentVideoOne] = useState(bg1);
  const [currentVideoTwo, setCurrentVideoTwo] = useState(bg1);


  const updateVideo = () => {
    const width = window.innerWidth;
    if (width < 900) {
      setCurrentVideoOne(bg3);
      setCurrentVideoTwo(bg4);
    } else  {
      setCurrentVideoOne(bg1);
      setCurrentVideoTwo(bg2);
    }
  };


  useEffect(() => {
    updateVideo();
    window.addEventListener('resize', updateVideo);
    return () => {
      window.removeEventListener('resize', updateVideo);
    };
  }, []);
  
  return (
    <div>
      <Navbar />
      <div className="wwa-container">
        <div className="wwa-overlay"></div>
        <video src={currentVideoOne} autoPlay loop muted />
        <div className="content">
          <h1>Who We Are</h1>
          <p>AOPBHA (Association of Public Health Business and Health Administration) 
            is a pioneering organization based in Ontario, Canada. We are dedicated to 
            bridging the gap between the public health sector and the business community. 
            Our diverse membership includes public health professionals, business leaders, 
            academics, and community advocates. Together, we aim to create a healthier, 
            more sustainable future through strategic collaboration and innovation.</p>
        </div>
      </div>


      <div className="bs-container">
        <div className="bs-left">
          <h1>Become a Sponsor</h1>
          <p>Help support our community</p>
        </div>
        <div className="bs-right">
          <button>
            <FaArrowAltCircleDown className="arrow-icon" />
          </button>

        </div>
      </div>

      <div className="wwd-container">
        <div className="wwd-overlay"></div>
        <video src={currentVideoTwo} autoPlay loop muted />
        <div className="wwd-content">
          <h1>What We Do</h1>
          <p>At AOPBHA, we enhance the integration of public health principles into business
            operations. We promote collaboration between public health agencies and businesses, 
            offer educational resources and training programs, and advocate for supportive 
            policies. We fund innovative research projects, engage with local communities to 
            promote health awareness, and provide expert consulting services. Additionally, 
            we host networking events and publish valuable reports and case studies to share 
            best practices and success stories. Through these activities, we aim to improve 
            public health outcomes and promote sustainable business practices across Ontario.</p>
        </div>
      </div>


      
    </div>
  );
};
export default Home;