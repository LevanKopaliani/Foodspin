import "../styles/FoodDescription.css";
import img1 from "../img/1.webp";
import img2 from "../img/2.webp";
import img3 from "../img/3.webp";
import img4 from "../img/4.png";
import img5 from "../img/5.png";

const FoodDescription = () => {
  return (
    <div className="descriptions">
      <div className="descriptions__item descriptions__item_visible">
        <img src={img3} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img4} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img5} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img1} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img2} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img3} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img4} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img5} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img1} alt="" className="description__img" />
      </div>
      <div className="descriptions__item">
        <img src={img2} alt="" className="description__img" />
      </div>
    </div>
  );
};

export default FoodDescription;
