import './App.css';
import people from './data';

function App() {

  return (
    <div className="App">
      <h3 className='title'>Reviews</h3>
      <section className="section">
        <p>{people[0].name}</p>
      </section>
    </div>
  )
}

export default App
