import { useState, useEffect } from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import './App.css';
import people from './data';

function App() {

  const [ myPeople, setPeople ] = useState(people);
  const [ index, setIndex ] = useState(0);

  

  return (
    <div className="App">
      <h3 className='title'>Reviews</h3>
      <section className="section">
        
      </section>
    </div>
  )
}

export default App
