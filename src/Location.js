import React from "react";
import "./location.css";

export default function Location(props) {
let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[now.getDay()];
  let months = [
    "January",
    "February", 
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
 
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`
  } 
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let amPm = hours <= 11? "AM" : "PM";
  hours = hours % 12 || 12;
  return (
    <div className="currentDate">
    {currentDay} {month} {date}, {year}, {hours}:{minutes} {amPm}
    </div>
  );
}

  