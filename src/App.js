import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Mycomponent brand="Apple" price ="5000"></Mycomponent>
      <Mycomponent brand="Samsang"price="3000"></Mycomponent>
      <Mycomponent></Mycomponent>

      <Mycomponent></Mycomponent>

    </div>
  );
}

function Mycomponent(props){
  const [points ,setPoints] = useState(1);
  const myStyle ={
    backgroundColor : 'lightblue',
    border: '1px solid red',
    margin:'20px',
    padding:'10px',
  }

  const AddPoints =()=>{
    const newPoints =points*2;
    setPoints(newPoints);
  }
  return(

    <div style ={myStyle}>
      <h1>Yo yo mama</h1>
      <p style ={{color:'red',fontWeight:'bold'}}>welcome</p>
      <h4>Asking price, price:{props.price} ,i have points{points} </h4>
      <button onClick={AddPoints}>addpoint</button>
    </div>
  )
}


export default App;
