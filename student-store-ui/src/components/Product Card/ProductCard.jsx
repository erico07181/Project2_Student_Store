import * as React from "react";
import "./ProductCard.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

export default function ProductCard(props) {
  const [total, setTotal] = React.useState(props.props.amount);

  return (
    <div className="prod-card">
      <div className="media">
        <a href={"/products/" + props.props.id}>
          <img className="prod-image" src={props.props.image} />
        </a>
      </div>
      <div className="product-and-add">
        <div className="product-name">{props.props.name}</div>
        <div className="add-and-remove">
          <IndeterminateCheckBoxIcon
            className="remove-item"
            style={{ color: props.props.amount == 0 ? "gray" : "darkred" }}
            onClick={() => {
              props.decreaseAmountAt(props.i);
              setTotal(props.props.amount);
            }}
          />
          <span className={total == 0 ? "amount hidden" : "amount"}>
            {total}
          </span>
          <AddBoxIcon
            className="add-item"
            style={{ color: total > 99 ? "gray" : "darkgreen" }}
            onClick={() => {
              props.increaseAmountAt(props.i);
              setTotal(props.props.amount);
              console.log(total);
            }}
          />
        </div>
      </div>
      <div className="prod-info">
        <div className="main-info">
          <h1 className="prod-name">{props.props.name}</h1>
          <p className="prod-price">{props.props.price}</p>
        </div>
      </div>
    </div>
  );
}
