import image from "../Assets/success.svg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./AboutMe.css";
const MyDetails = () => {
  return (
    <div className="typing-div sections">
      <div>
        <h1>I am Web Developer </h1>
        <h3 className="AllDetail">
          Greetings! I'm Tejas Kumarley, a web developer with 1.5 years of
          experience. I've worked on projects like Healing Leaves, DXC
          Technology, Pharmacann, and more. My expertise includes JavaScript,
          React, Node.js, HTML, CSS, Express, and EJS. I'm passionate about
          creating dynamic and interactive web applications. With a strong
          attention to detail and problem-solving skills, I strive to deliver
          high-quality work. I'm always eager to learn and adapt to new
          technologies and industry trends. Collaboration is key to my approach
          as a developer, and I enjoy working with cross-functional teams to
          bring innovative solutions to life. Whether it's designing
          user-friendly interfaces or optimizing website performance, I'm
          dedicated to creating exceptional digital experiences. I'm excited to
          leverage my skills and experience to contribute to impactful web
          development projects. If you have any web development needs or ideas,
          let's connect and discuss how I can assist you. Together, we can
          create something amazing!
        </h3>
        <div className="social-links">
        <a href="#" className="social-link">
          <FaFacebookF />
        </a>
        <a href="#" className="social-link">
          <FaTwitter />
        </a>
        <a href="#" className="social-link">
          <FaInstagram />
        </a>
        <a href="#" className="social-link">
          <FaLinkedinIn />
        </a>
      </div>
      </div>

      <img
        src={image}
        alt="react image"
        className="banner-Image imageAboutme"
      />
    </div>
  );
};

export default MyDetails;
