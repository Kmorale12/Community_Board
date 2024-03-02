import './App.css';
import data from './assets/data.json'
import Card from './componets/Card.jsx';
const App = () => {
  return (
    <div className="App">
    <h1 className ="app-title">Community Board</h1>  
    <div className="card-container">
      {data.map((item) => (
        <Card key={item.id} description={item.description} name={item.name} buttonTitle={item.button_text} />
      ))}
    </div>
  </div>
  );
};

export default App