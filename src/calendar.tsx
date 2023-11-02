import React, { useState } from "react";
import './App.css';
import Months from "./months";
import Days from "./days";
import DaysMonths from "./days-months";
import Years from "./year";

const Calendar = () => {
  const newDate = new Date();
  const mesActual = newDate.getMonth();
  const yearActual = newDate.getFullYear();
  const [mes, setMes] = useState(mesActual);
  const [year, setYear] = useState(yearActual);

  const changeMonth = (dif: number) => {
    const newValor = mes + dif;
    if (newValor >= 0 && newValor < 12) {
      setMes(newValor);
    }
  };

  const changeYear = (dif: number) => {
    const newYear = year + dif;
    if (newYear >= 2020 && newYear <= 2025) {
      setYear(newYear);
    }
  };

  const day = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const months = [
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
    "December"
  ];

  return (
    <div className="App roudBorder">
      <h1>Calendario</h1>
      <Years
        year={year}
        numberMonth={mes}
        changeYear={changeYear}
      ></Years>
      <Months
        month={months[mes]}
        numberMonth={mes}
        changeMonth={changeMonth}
      />
      <Days dias={day} />
      <DaysMonths
        mes={months[mes]}
        numberMonth={mes}
        año={year}
      />
    </div>
  );
};

export default Calendar;




