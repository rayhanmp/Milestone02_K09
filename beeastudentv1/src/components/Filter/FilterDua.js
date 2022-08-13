import React from "react";
import "./Filter.css";

function FilterDua() {
  return (
    <div className="Filter second">
      <p>Pendidikan</p>
      <label class="container">SMP/SEDERAJAT
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">SMA/SEDERAJAT
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">S1
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">S2
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">D3/D4
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
    </div>
  )
}

export default FilterDua;