import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import  './Home.css';
import bg1 from '../images/bg1.mp4';
import bg2 from '../images/bg2.mp4';
import bg3 from '../images/bg3.mp4';
import bg4 from '../images/bg4.mp4';
import strat from '../images/strat.png';
import sand from '../images/sand.png';
import profile from '../images/profile.jpg';
import shein from '../images/shein.jpg';
import spark from '../images/spark.png';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const Home = () => {

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

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

  const sponsors = [
    {
      name: 'AstraZeneca',
      image: sand,
      desc: 'A proud supporter since 2023'
    },
    {
      name: 'Profile',
      image: profile,
      desc: 'www.bmo.com/'
    },
    {
      name: 'Shein',
      image: shein,
      desc: 'www.bmo.com/'
    },
    {
      name: 'Spark',
      image: spark,
      desc: 'www.bmo.com/'
    },
  ];


  
  return (
    <div>
      <Navbar />
      <div className='container'>
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
            <button onClick={() => scrollToElement('sponsor-container')}>
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

        <div className='strategy-container'>
          <div className='strategy-left'>
            <h3>Our Strategy</h3>
            <h4>2023-25</h4>
            <p>Vision: Inspires excellence in public health business leadership</p>
            <p>Mission: Strengthens and influences public health business leadership through advocacy, collaboration and development</p>
          </div>
          <div className='strategy-right'>
            <img src={strat} alt='strategic plan' />
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

        <div className='sponsor-container'>
          <div className='sponsor-top'>
            <h1>Our Top Sponsors</h1>
          </div>
          <div className='sponsor-middle'>
            {sponsors.map(sponsor => (
              <div key={sponsor.id} className='sponsor-card'>
                <img src={sponsor.image} alt={sponsor.name} className='sponsor-logo' />
                <h2>{sponsor.name}</h2>
                <h3>{sponsor.desc}</h3>
              </div>
            ))}
          </div>
          <div className='sponsor-bottom'>
            <h1>Become a Sponsor</h1>
            <p>See more information about these companies and how you can join us on our <Link to="/Sponsor">Sponsors</Link> page</p>
          </div>
          <div class="line"></div>

        </div>

      </div>

      <Footer />
    </div>
  );
};
export default Home;