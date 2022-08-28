import './App.css';
import Good from './component/Good/Good';
import Fast from './component/Fast/Fast';
import Cheaf from './component/Cheaf/Cheaf';
function App() { 
  return (
    <div className="App">
      <div id="innerdiv">
        <Good/>
        <Fast/>
        <Cheaf/>
      </div>
    </div>
  );
}

export default App;
