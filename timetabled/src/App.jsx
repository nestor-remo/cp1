import Calendar from './components/Calendar';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1> Itinerary for 7 days in California </h1>
      <h2> Welcome to Fullerton, California! Check out this calendar to get to know the city and see all the sights during your way </h2>
      <Calendar />
    </div>
  )
}

export default App
