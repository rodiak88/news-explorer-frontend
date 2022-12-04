import './About.css';
import aboutImage from '../../images/about_image.jpg';

function About() {
  return (
    <section className='about'>
      <img
        className='about__image'
        src={aboutImage}
        alt='A woman meditating peacefully surrounded by green grass and trees'
      />
      <div className='about__container'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__text'>
          Hello, I am Rudi Abou Karam. I just finished the Practicum 100 web
          development bootcamp. What you're seeing here is the final project of
          a highly intensive but super enjoyable 10 months program. This project
          was developed by utilizing the HTML, CSS and JavaScript skills I
          aquired. Hope you enjoy it as much as I enjoyed creating it. All
          feedback is welcome so feel free to contact me on social media.
        </p>
      </div>
    </section>
  );
}

export default About;
