import './App.css'
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';

function App() {

let a = 20;
  return (
    <div>

      <Navbar/>
      <h1>Hello {a}</h1>
    
      <MyButton title={"Buy Now"}/>
      <MyButton title={"Click me"}/>
    </div>
  )
}

export default App


