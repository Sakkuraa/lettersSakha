import CostItem from "./CostItem";
import "./CostList.css";

const CostList = (props) => {
  if (props.words.length === 0) {
    return <h2 className="cost-list__fallback">Здесь пока нет определения</h2>;
  }
  return (
    <ul className="cost-list">
      {props.words.map((word) => (
        <CostItem
          key={word.id}
          description={word.description}
          context={word.context}
        />
      ))}
    </ul>
  );
};

export default CostList;
