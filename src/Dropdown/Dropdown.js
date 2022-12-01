import React from "react";
import colorOptions from "./data";
import Select from "react-select";
import colorStyles from "./ColorStyles";

const Dropdown = () => {
  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        defaultValue={[colorOptions[0], colorOptions[1]]}
        isMulti
        options={colorOptions}
        styles={colorStyles}
      />
    </div>
  );
};

export default Dropdown;
