import { useState } from "react";
import "./App.css";
import FoodDescription from "./components/FoodDescription";
import FoodSlider, { Rotate } from "./components/FoodSlider";
import Menu from "./components/Menu";
import arrow from "./img/arrow.png";
import SliderData from "./components/SliderData";

function App() {
  const [data, setData] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <Menu />
        <div
          className="back"
          style={{
            backgroundColor: SliderData[data].backColor,
          }}
        >
          <FoodSlider />
        </div>
        <div className="info">
          <div className="dish-info">
            <p
              className="dish-price"
              style={{
                color: SliderData[data].mainColor,
              }}
            >
              {SliderData[data].price}
            </p>
            <h1 className="dish-title">{SliderData[data].title}</h1>
            <p className="dish-description">{SliderData[data].description}</p>
            <button
              className="order-btn"
              style={{
                backgroundColor: SliderData[data].mainColor,
                boxShadow: "0px 20px 40px" + SliderData[data].backColor,
              }}
            >
              order now
            </button>
          </div>
          <div className="fooddescription">
            <FoodDescription />
            <div className="controlbutton">
              <button
                className="left"
                style={{ backgroundColor: SliderData[data].mainColor }}
                onClick={() => {
                  Rotate(-1);
                  setData(data === 0 ? 9 : data - 1);
                }}
              >
                <img src={arrow} alt="left" />
              </button>
              <button
                className="right"
                style={{ backgroundColor: SliderData[data].mainColor }}
                onClick={() => {
                  Rotate(1);
                  setData(data === 9 ? 0 : data + 1);
                }}
              >
                <img src={arrow} alt="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
