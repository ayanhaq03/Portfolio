import "./Project.css";
import Product from "../product/Product";
import { products } from "../../img/data";

const Project = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          Here are some projects designed and developed by me using MERN stack technologies
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Project;