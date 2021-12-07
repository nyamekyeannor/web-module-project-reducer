import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

import reducer, { initialState } from "../reducers";
//import { addOne } from "../actions";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  recallMemory,
  clearMemory,
} from "../actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*const handleClick1 =() =>{
    dispatch(addOne());
  }*/
  const handleClickNumber = (number) => {
    dispatch(applyNumber(number));
  };
  const handleClickOperator = (operator) => {
    dispatch(changeOperation(operator));
  };
  const handleClickClear = () => {
    dispatch(clearDisplay());
  };
  const handleClickAddMemory = () => {
    dispatch(addMemory());
  };
  const handleClickRecallMemory = () => {
    dispatch(recallMemory());
  };
  const handleClickClearMemory = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleClickAddMemory} />
              <CalcButton value={"MR"} onClick={handleClickRecallMemory} />
              <CalcButton value={"MC"} onClick={handleClickClearMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleClickNumber(1)} />
              <CalcButton value={2} onClick={() => handleClickNumber(2)} />
              <CalcButton value={3} onClick={() => handleClickNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleClickNumber(4)} />
              <CalcButton value={5} onClick={() => handleClickNumber(5)} />
              <CalcButton value={6} onClick={() => handleClickNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleClickNumber(7)} />
              <CalcButton value={8} onClick={() => handleClickNumber(8)} />
              <CalcButton value={9} onClick={() => handleClickNumber(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleClickOperator("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleClickOperator("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleClickOperator("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClickClear} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
