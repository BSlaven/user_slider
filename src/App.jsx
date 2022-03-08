import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
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
        {myPeople && myPeople.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if(personIndex === index) {
            position = 'activeSlide'
          }
          if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='icon' />              
            </article>
          )
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
