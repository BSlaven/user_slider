import { useState, useEffect } from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import './App.css';
import people from './data';

function App() {

  const [ myPeople, setPeople ] = useState(people);
  const [ index, setIndex ] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        {myPeople && myPeople.map((person, index) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default App
