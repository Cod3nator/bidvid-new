"use client"
import Contact_us from '../../component/Contact_us';
import React from 'react'
import Navbar from '../../component/navbar';

const About_us = () => {
  const teamMembers = [
    { name: 'Rajkumar Remalli', title: 'Founder & CEO', image: '/assets/about-img/rajkumar.png' },
    { name: 'Amarnath', title: 'Head of Programmatic', image: '/assets/about-img/amarnath.png' },
    { name: 'Alok Shenoy', title: 'Co-founder & CTO', image: '/assets/about-img/alok.png' },
    { name: 'Shreya R', title: 'Manager Australia', image: '/assets/about-img/shreya.png' },
    { name: 'Bryan Edwin', title: 'Client Services', image: '/assets/about-img/bryan.png' },
    { name: 'Manish Parwal', title: 'Director', image: '/assets/about-img/manish.png' },
    { name: 'Anujita Jain', title: 'Director', image: '/assets/about-img/anujita.png' },
  ];
  
  return (
   <>
   <Navbar/>
   <section className="about-us">
   <div className="container">
          <div className="about-wrapper">
            <div className="about-content">
              <h2>About Us</h2>
              <p>
                At BidVids, we're revolutionizing the world of programmatic advertising with our AI-powered optimization platform. Our mission is to help digital media buyers maximize their advertising yield while enhancing user experience. We leverage cutting-edge technology to provide real-time optimization, predictive modeling, and actionable insights tailored to meet the unique needs of digital publishers.
              </p>
            </div>
            <div className='about-image'>
              <img
                src="/assets/about-img/robot.png"
                alt="Robot"
                width={177.23}
                height={264}
              />
            </div>
          </div>
      </div>
      

      <div className="container">
        <div className="about-us-detail">
          <div className="custom-box">
            <h2>Our Story</h2>
            <p>Founded by industry veterans with decades of experience, BidVids was born out of a passion for innovation and excellence in digital advertising. Our team comprises experts who have been at the forefront of media and technology, bringing together a wealth of knowledge and expertise to create solutions that drive success for our clients.</p>
            <img src="/assets/about-img/some.png" alt="Left Image" className="custom-box-image" />
          </div>
          <div className="custom-box">
            <h2>Our Vision</h2>
            <p>At BidVids, we envision a future where digital advertising is seamlessly optimized by AI, delivering maximum revenue. Our commitment to innovation and excellence drives us to continuously improve our platform, ensuring our clients stay ahead in a rapidly evolving industry.</p>
            <img src="/assets/about-img/some.png" alt="Right Image" className="custom-box-image" />
          </div>
        </div>
      </div>
   
    
    
      <div className="container">
        <div className="team-container desktop">
          <h2 className="team-header">Our Team</h2>
          <div className="team-members">
            <div className="member member-row">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div className="member-box" key={index}>
                  <img src={member.image} alt={member.name} className="member-image" width={113} height={113} />
                  <div className="member-name">{member.name}</div>
                  <div className="member-title">{member.title}</div>
                </div>
              ))}
            </div>
            <div className="member member-row2">
              {teamMembers.slice(3).map((member, index) => (
                <div className="member-box" key={index + 3}>
                  <img src={member.image} alt={member.name} className="member-image" width={113} height={113} />
                  <div className="member-name">{member.name}</div>
                  <div className="member-title">{member.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="team-container mobile">
          <h2 className="team-header">Our Team</h2>
          <div className="team-members">
            <div className="member">
              {teamMembers.map((member, index) => (
                <div className="member-box" key={index}>
                  <img src={member.image} alt={member.name} className="member-image" width={113} height={113} />
                  <div className="member-name">{member.name}</div>
                  <div className="member-title">{member.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Design for mobile  */}
      {/* <div className="team-container-mobile block md:hidden">
        <h2 className="team-header-mobile text-white">Our Team</h2>
      <div className="row-mobile">
        {teamMembers.slice(0, 2).map((member, index) => (
          <div className="team-member-mobile" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
      <div className="row-mobile">
        {teamMembers.slice(2, 4).map((member, index) => (
          <div className="team-member-mobile" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
      <div className="row-mobile">
        {teamMembers.slice(4, 6).map((member, index) => (
          <div className="team-member-mobile" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
      <div className="row-mobile">
        {teamMembers.slice(6).map((member, index) => (
          <div className="team-member-mobile" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div> */}

   </section>
   <Contact_us/>
   </>
  )
}

export default About_us;