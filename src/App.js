import logo from './logo.svg';
import './App.css';
import CityList from './components/CityList.js'
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.3,
      date: new Date(2022, 3, 29)
    },
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.3,
      date: new Date(2022, 3, 29)
    }
  ]
 
  return (
    <div>
      <CityList></CityList>
     
    </div>

  );
}

export default App;
