import React from 'react';
import './App.css';
import {Main} from "./ui/Main/Main";
import {Header} from "./ui/Header/Header";
import {useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(setCurrencyTC(0))
  // }, [])


  return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
  );
}

export default App;
