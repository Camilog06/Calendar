import React, { Component } from 'react';

interface DaysMonthsProps {
  mes: string; 
  numberMonth: number;
  año: number;
}

class DaysMonths extends Component<DaysMonthsProps> {
  firstDayInPreviousMonth() {
    const day = "01";
    const month = this.props.mes;
    const year = this.props.año;
    const days = [0, 1, 2, 3, 4, 5, 6];
    const date = new Date(month + " " + day + "," + year + " 12:00:00");
    const Day = days[date.getUTCDay()];

    return Day;
  }

  getDaysMonths() {
    const mes = this.props.numberMonth;
    const daysMonth = new Date(2023, mes + 1, 0).getDate();

    return daysMonth;
  }

  getTablero() {
    const nuevoArray: any[][] = [];
    let cont = 0;
    let cont2 = 0;
    const day = this.firstDayInPreviousMonth();
    const end = this.getDaysMonths();

    for (let i = 0; i < 6; i++) {
      nuevoArray[i] = [];
      for (let j = 0; j < 7; j++) {
        cont2++;
        if (cont2 > day && cont < end) {
          cont++;
          nuevoArray[i][j] = cont;
        } else {
          nuevoArray[i][j] = " ";
        }
      }
    }

    return nuevoArray;
  }

  render() {
    const mes = this.props.numberMonth;
    const fecha = new Date();
    const mesActual = fecha.getMonth();
    const diaActual = fecha.getDate();
    const tablero = this.getTablero();
    const nuevoArray = tablero.map(function (item, index) {
      const listItems = item.map(function (nuevo, i) {
        let clases = i === 0 ? "Dom" : " ";
        if (mesActual === mes && diaActual === nuevo) {
          clases = "Hoy";
        }

        return <div key={i} className={clases}>{nuevo}</div>;
      });

      return <div key={index} className="DaysMonths">{listItems}</div>;
    });

    return <div>{nuevoArray}</div>;
  }
}

export default DaysMonths;
