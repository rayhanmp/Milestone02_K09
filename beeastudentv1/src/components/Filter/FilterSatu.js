import React from "react";
import "./Filter.css";

function FilterSatu() {
  return (
    <div className="Filter first">
      <p>Jenis Beasiswa</p>
      <label class="container">Beasiswa Pemerintah
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">Beasiswa Internasional
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">Beasiswa Penelitian
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">Beasiswa non-Akademik
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">Beasiswa Ikatan Dinas
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">Pertukaran Pelajar
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
    </div>
  )
}

export default FilterSatu;