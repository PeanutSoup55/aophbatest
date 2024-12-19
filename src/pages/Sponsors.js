import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Sponsor.css';
import spons from '../images/sponsor.png';

const Sponsor = () => {
    return(
        <div className='sponsor'>
            <Navbar />
            <div className='sponsor-content'>
                <div className='content-top'>
                    <img src={spons} alt='sponsor' />
                    <div className='content-top-text'>
                        <h1>Our Sponsors</h1>
                        <p>At the Association of Public Health and Business Affairs (AOPBHA), 
                            we are dedicated to fostering meaningful partnerships between the 
                            public health sector and businesses. Our sponsors play a crucial 
                            role in supporting our initiatives and helping us achieve our mission 
                            of promoting public health through collaborative efforts. We are 
                            proud to showcase our valued sponsors and provide details about our
                            upcoming Annual Public Health and Business Summit 2024. Thank you 
                            for visiting, and we look forward to your continued support!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Sponsor;