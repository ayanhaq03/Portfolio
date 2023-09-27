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
         I'm a MERN stack developer with over 6 month of experience in building and maintaining high-quality web applications. I have a passion for creating user-friendly and scalable applications that solve real-world problems.
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