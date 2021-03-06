import React from 'react';

import imageDecoration from '../assets/Decoration.svg';
import imageSignature from '../assets/Signature.svg';

const HomeAboutUs = () => {

  return (
      <>
      <section id="about_us">
      <div className="about_section_left">
          <div className="content_wrapper">
              <p>O nas</p>
              <img alt="decoration" src={imageDecoration} />
              <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
              <img className="signature" alt="signature" src={imageSignature} />
          </div>
      </div>
      <div className="about_section_right">
      </div>
      </section>
    </>
  );
}

export default HomeAboutUs;
