import './App.css';
import './components/NavBar'
import './components/Background'
import NavBar from './components/NavBar';
import Background from './components/Background';
import Rec from './components/Rec';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <Rec />
      
    </div>
  );
}

export default App;