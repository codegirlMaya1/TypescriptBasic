import React from 'react';
import ColorList from './ColorList';
import EvenNumbers from './EvenNumbers';
import UserList from './UserList';

const greeting: string = "Hello, TypeScript!";
const numberList: number[] = [5, 10, 15];
const calculateSum = (a: number, b: number): number => a + b;

const App: React.FC = () => {
  return (
    <div>
      <h1>{greeting}</h1>
      <p>Number List: {numberList.join(', ')}</p>
      <p>Sum of 5 and 10: {calculateSum(5, 10)}</p>
      <ColorList />
      <EvenNumbers />
      <UserList />
    </div>
  );
};

export default App;
