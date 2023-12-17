import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <Weather city="London"/>
        <footer>
          This project was coded by{" "}
          <a href="https://grand-moxie-36c236.netlify.app/"> Myo Pa Pa Kyaw</a>{" "}
          and is
          <a href="https://github.com/Cyntra-22/react_weather_app_shecodes5">
            {" "}
            open-source{" "}
          </a>
          on GitHub.
        </footer>
      </div>
    </div>
  );
}
