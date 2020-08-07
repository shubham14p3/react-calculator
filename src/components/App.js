import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function App() {
  return (
    <div className="calculator-body">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}
