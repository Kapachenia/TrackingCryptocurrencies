import {Route, Routes} from "react-router-dom";
import {Main} from "../Main/Main";
import {DetailInformation} from "../DetailInformation/DetailInformation";
import React from "react";

export const RoutesApp = () => {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/detailInformation'} element={<DetailInformation/>}/>
            </Routes>

        </div>
    )
}