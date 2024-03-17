import "./About.css";
import Aboutimg from "../../img/Aboutimg.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src= {Aboutimg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        As a Full Stack Developer, I specialize in crafting web-based applications with meticulous attention to detail. With a solid grasp of Object-Oriented Programming (OOP) principles and Data Structures and Algorithms (DSA), I'm dedicated to developing user-friendly and scalable solutions that address real-world challenges.
        </p>
        <p className="a-desc">
        I'm proficient in all aspects of the MERN stack, including MongoDB, Express.js, React.js, and Node.js. I also have experience with a variety of other technologies, such as HTML, CSS, JavaScript ,Strapi.
        </p>
        <div className="a-about">
     
          <div className="a-about-texts">
            <h4 className="a-exp-title">Experience</h4>
            <p className="a-exp-desc">
              Worked for Globe4education as a Designer and Developer
            </p>
            <h4 className="a-exp-title"> Education </h4>
            <p className="a-exp-desc">
              Pursuing B-tech from Technocrats Institute of Technology & Science
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;