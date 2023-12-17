import "./App.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <Weather/>
        <footer>
          This project is created by Myo Pa Pa Kyaw and is
          <a
            href="https://github.com/Cyntra-22/react_weather_app_shecodes5" 
            
          >
            {" "}
            open-source{" "}
          </a>
          on GitHub.
        </footer>
      </div>
    </div>
  );
}
