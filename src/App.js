import "./App.css";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Menu />
        <div className="dish-info">
          <p className="dish-price">$32</p>
          <h1 className="dish-title">Green Goddess Chicken Salad</h1>
          <p className="dish-description">
            It is a non vegetarian salad which consists of the green goddess
            dressing mixed with chicken, peppers, olives and celery.{" "}
          </p>
        </div>
        <div className="back">test</div>
      </div>
    </div>
  );
}

export default App;
