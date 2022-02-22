import React from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {NavLink, Route, Routes} from "react-router-dom";
import {Main} from "./ui/Main/Main";
import {Briefcase} from "./ui/Briefcase/Briefcase";
import {DetailInformation} from "./ui/DetailInformation/DetailInformation";

function App() {

    const dispatch = useDispatch()

    // useEffect(() => {
    //   dispatch(setCurrencyTC(0))
    // }, [])


    return (
        <div className="App">


            <NavLink to={'/'}>Main</NavLink>
            <NavLink to={'/briefcase'}>Briefcase</NavLink>
            <NavLink to={'/detailInformation'}>DetailInformation</NavLink>


            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/briefcase'} element={<Briefcase/>}/>
                <Route path={'/detailInformation'} element={<DetailInformation />}/>
            </Routes>

        </div>
    );
}

export default App;
