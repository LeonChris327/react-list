import React from "react";
import {Routes, Route} from 'react-router-dom';

import Gallery from './Gallery';


const Mainn = () => (

    
    <Routes>
        <Route path="/gallery" element={<Gallery />}></Route>
    </Routes>

)

export default Mainn;
