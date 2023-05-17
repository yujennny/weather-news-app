import Weather from './Weather.js';
import React from 'react';
import BasicCard from './NewsBox.js';

function App() {

  return (
    <div>
      <header>
      </header>
        {Weather()}
        {BasicCard(0)}
        {BasicCard(1)}
        {BasicCard(2)}
        {BasicCard(3)}
        {BasicCard(4)}


</div>

  );

}

export default App;