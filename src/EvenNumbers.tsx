import React from 'react';
import { filterNumbers } from './filterNumbers';

const EvenNumbers: React.FC = () => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const evenNumbers = filterNumbers(numbers);
  
  return (
    <ul>
      {evenNumbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default EvenNumbers;
