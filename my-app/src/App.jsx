import Header from './components/Header'
import FoodTruckCard from './components/FoodTruckCrad';
import foodTrucks from './data';
import './styles/app.css'

function App() {
    return (
      <div className='app'>
        <Header/>
        <div className="food-truck-container">
            {foodTrucks.map((truck, index) => (
                <FoodTruckCard key={index} {...truck} />
            ))}
        </div>        
      </div>
      
    );
  }
  
  export default App;
  