import Square from "./components/Square.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''});
  const [currentSymbol, setCurrentSymbol] = useState("0");
  const [filledSquares,setFilledSquares] = useState(0)
  
  const onSquareClick = (key) => {
    setValues((values)=>{
      return {...values,[key]:currentSymbol}
    })
    console.log(values)
    setCurrentSymbol((prevSymbol)=>{
      if (prevSymbol == "X") return "O"
      else return "X"
    })
    setFilledSquares((filled)=>filled+1)
  };
  return (
    <>
      <div className="board-row">
        <Square
          square={() => {
            onSquareClick(1);
          }}
          value={values[1]}
          done={values[1] != ""}
        />
        <Square
          square={() => {
            onSquareClick(2);
          }}
          value={values[2]}
          done={values[2] != ""}
        />
        <Square
          square={() => {
            onSquareClick(3);
          }}
          value={values[3]}
          done={values[3] != ""}
        />
      </div>
      <div className="board-row">
        <Square
          square={() => {
            onSquareClick(4);
          }}
          value={values[4]}
          done={values[4] != ""}
        />
        <Square
          square={() => {
            onSquareClick(5);
          }}
          value={values[5]}
          done={values[5] != ""}
        />
        <Square
          square={() => {
            onSquareClick(6);
          }}
          value={values[6]}
          done={values[6] != ""}
        />
      </div>
      <div className="board-row">
        <Square
          square={() => {
            onSquareClick(7);
          }}
          value={values[7]}
          done={values[7] != ""}
        />
        <Square
          square={() => {
            onSquareClick(8);
          }}
          value={values[8]}
          done={values[8] != ""}
        />
        <Square
          square={() => {
            onSquareClick(9);
          }}
          value={values[9]}
          done={values[9] != ""}
        />
      </div>
      {filledSquares===9 && "Game Over"}
    </>
  );
}

export default App;