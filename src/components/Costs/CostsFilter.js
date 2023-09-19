import "./CostsFilter.css";

const CostsFilter = (props) => {
  let lettersElements = props.lettersData.map((letter) => (
    <option value={letter.value} label={letter.label} />
  ));

  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };
  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбери Букву</label>
        <select value={props.year} onChange={yearChangeHandler}>
          {lettersElements}
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
