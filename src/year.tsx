import React from 'react';

interface YearProps {
  year: number;
  numberMonth: number;
  changeYear: (dif: number) => void;
}

const Years: React.FC<YearProps> = ({ year, numberMonth, changeYear }) => {
  return (
    <div className="Months">
      <button onClick={() => changeYear(-1)}> &lt; </button>
      <div>
        <h3>
          {year}
        </h3>
      </div>
      <button onClick={() => changeYear(1)}> &gt; </button>
    </div>
  );
}

export default Years;