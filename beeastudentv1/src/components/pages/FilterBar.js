import { useState } from "react";

const FilterBar = ({
  genders,
  types,
  onTypeFilter,
  onGenderFilter,
}) => {
  const [filters, setFilters] = useState({
    type: "",
    gender: "",
  });

const handleInput = (field) => (event) => {
  const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "type":
        onTypeFilter(value);
        break;
      case "gender":
        onGenderFilter(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="type">Jenis</label>
        <select
          className="form-control"
          id="type"
          onChange={handleInput("type")}
        >
          <option value="">Select</option>
          {types.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          onChange={handleInput("gender")}
        >
          <option value="">Select</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
