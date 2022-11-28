import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Welcome from './Welcome.js';
import FeaturedPark from './FeaturedPark.js';

function App() {

  const [parks, setParks] = useState(["High Park", "Sunny Acres", "Trinity-Bellwoods"]);

  const removePark = (userPark) => {
    // setParks([]);
    console.log(userPark);

    const oldParks = {...parks};

    const updatedParks = oldParks.filter((filteredPark) => filteredPark !==userPark) 

    setParks(updatedParks); 

    }


    return (
     <div className="App">
  
        {parks.map( (parkName) => {
          const newFunction = () => {
            removePark(parkName)
            
          }
          return <FeaturedPark name={parkName} removeParkButton={newFunction} />
        })}
  
     </div>
    );
  }



export default App;
