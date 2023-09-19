import Card from "../UI/Card";
import CostList from "./CostList";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.words.filter((word) => {
    return word.date.getFullYear().toString() === selectedYear; //getFullYear().toString()
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          year={selectedYear}
          onChangeYear={yearChangeHandler}
          lettersData={props.lettersData}
        />
        <CostList words={filteredCosts} />
      </Card>
    </div>
  );
};
export default Costs;
