import React from 'react';

interface MonthsProps {
  month: string;
  numberMonth: number;
  changeMonth: (dif: number) => void;
}

const Months: React.FC<MonthsProps> = ({ month, numberMonth, changeMonth }) => {
  return (
    <div className="Months">
      <button onClick={() => changeMonth(-1)}> &lt; </button>
      <div>
        <h3>
          {month}
        </h3>
      </div>
      <button onClick={() => changeMonth(1)}> &gt; </button>
    </div>
  );
}

export default Months;



