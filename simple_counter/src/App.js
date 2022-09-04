import React from 'react';

import Counter from './Components/Counter';
import './App.css';
import './bootstrap.min (2).css';

let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

let stop = false;

function App() {

  let countArr = [count7,count6,count5,count4,count3,count2,count];

  let resetCount = () => {
    count7 = 0;
    count6 = 0;
    count5 = 0;
    count4 = 0;
    count3 = 0;
    count2 = 0;
    count = 0;
  }

  let changeHandler = (e) =>{
    let userInput = document.getElementById("inputField");
    let input = userInput.value
    console.log(input);
    let inputArr = input.split("").reverse();
    console.log(inputArr);
    
    // if (inputArr.length < 1) {
    //   count7 = 0;
    //   count6 = 0;
    //   count5 = 0;
    //   count4 = 0;
    //   count3 = 0;
    //   count2 = 0;
    //   count = 0;
    // }
    switch(inputArr.length) {
      case 1: 
        resetCount();
        count = inputArr[0];
        break;
      case 2: 
        resetCount();
        count = inputArr[0];
        count2 = inputArr[1];
        break;
      case 3: 
        resetCount();
        count = inputArr[0];
        count2 = inputArr[1];
        count3 = inputArr[2];
        break;
      case 4:
        count = inputArr[0];
        count2 = inputArr[1];
        count3 = inputArr[2];
        count4 = inputArr[3];
        break;
      case 5:
        count = inputArr[0];
        count2 = inputArr[1];
        count3 = inputArr[2];
        count4 = inputArr[3];
        count5 = inputArr[4];
        break;
      case 6:
        count = inputArr[0];
        count2 = inputArr[1];
        count3 = inputArr[2];
        count4 = inputArr[3];
        count5 = inputArr[4];
        count6 = inputArr[5];
        break;
      case 7:
        count = inputArr[0];
        count2 = inputArr[1];
        count3 = inputArr[2];
        count4 = inputArr[3];
        count5 = inputArr[4];
        count6 = inputArr[5];
        count7 = inputArr[6];
        break;
    }
    
  }

 
  function increaseCount() {
    if (!stop) {
    count++;
    if (count === 10) {
      count2++; 
      count = 0;
    }
    if (count2 === 10) {
      count3++;
      count2 = 0;
      count = 0;
    }
    if (count3 === 10) {
      count4++;
      count3 = 0;
      count2 = 0;
      count = 0;
    }
    if (count4 === 10) {
      count5++;
      count4 = 0;
      count3 = 0;
      count2 = 0;
      count = 0;
    }
    if (count5 === 10) {
      count6++;
      count5 = 0;
      count4 = 0;
      count3 = 0;
      count2 = 0;
      count = 0;
    }
    if (count6 === 10) {
      count7++;
      count6 = 0;
      count5 = 0;
      count4 = 0;
      count3 = 0;
      count2 = 0;
      count = 0;
    }
    if (count7 === 10) {
      count7 = 0;
      count6 = 0;
      count5 = 0;
      count4 = 0;
      count3 = 0;
      count2 = 0;
      count = 0;
    }
  }
    
    
   
    
   return countArr;
  }

 
  return (
    <div className="App">
      <div className="allCounters">
        <Counter count1={increaseCount()} />
      </div>
      <div>
        <button className="btn btn-danger" onClick={() => resetCount()}>Reset</button>
        <button className="btn btn-warning" onClick={() => {
          stop = true;
        }}>Pause</button>
        <button className="btn btn-success" onClick={()=> stop = false}>Resume</button>
        <form> 
          <input type="text" id = "inputField" placeholder="Start From" ></input>
          <button className="btn btn-primary" id = "inputButton" type = "button" onClick= {() => changeHandler()}>Start</button>
        </form>
      </div>
    </div>
  );

}


export default App;
