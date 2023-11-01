import React from 'react';

interface DaysProps {
  dias: string[];
}

const Days: React.FC<DaysProps> = ({ dias }) => {
  return (
    <div className="Days">
      <div>{dias[0]}</div>
      <div>{dias[1]}</div>
      <div>{dias[2]}</div>
      <div>{dias[3]}</div>
      <div>{dias[4]}</div>
      <div>{dias[5]}</div>
      <div>{dias[6]}</div>
    </div>
  );
};

export default Days;

