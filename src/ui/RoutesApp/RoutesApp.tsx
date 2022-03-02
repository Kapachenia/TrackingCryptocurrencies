import {Route, Routes} from "react-router-dom";
import {DetailInformation} from "../DetailInformation/DetailInformation";
import React from "react";
import {Content} from "../Main/Content";

export const RoutesApp = () => {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Content/>}/>
                <Route path={'/detailInformation'} element={<DetailInformation/>}/>
            </Routes>
        </div>
    )
}