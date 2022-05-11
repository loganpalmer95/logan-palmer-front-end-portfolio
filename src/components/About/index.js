import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a recent graduate of University of Central Florida's Full-Stack Software developer bootcamp leveraging a background in Customer Service and Operations Management working towards my career goal of becoming a Software Developer. In my off time, I enjoy spending time with family, friends and playing golf.
        </p>
      </div>
    </section>
  );
}

export default About;
