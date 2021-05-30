import React from "react";
import './App.css';
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Location from "./Location";
import Footer from "./Footer";
import DailyForecast from "./DailyForecast";

function App() {
  return (
    <div className="App">
      <Search />
      <Location />
      <DailyForecast />
      <Weather />
      <Forecast />
      <Footer />
      </div>
  );
}

export default App;
