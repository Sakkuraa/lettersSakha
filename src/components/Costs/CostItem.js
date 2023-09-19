import "./CostItem.css";

import Card from "../UI/Card";

const CostItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__description"> {props.context}</div>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;
