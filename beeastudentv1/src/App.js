import { useState } from "react";
import React from 'react';

import "./Dropdown.css";
import Dropdown from "./Dropdown";

export default function App() {
    const [selected, serSelected] = useState("");
    return (
        <div className="App">
            {}
            <Dropdown selected={selected} setSelected={serSelected}/>
        </div>
    );
}