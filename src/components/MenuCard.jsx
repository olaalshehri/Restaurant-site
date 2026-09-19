import DishIcon from "./icons/DishIcon";
import Icon from "./icons/Icon";

/* غيرت الاسم من i = fooditem*/
const MenuCard = ({ fooditem, addToCart, qty, decrementItem }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <DishIcon id={fooditem.icon} />
        {fooditem.tags.includes("popular") && (
          <span className="badge badge--popular">
            <Icon id="flame-icon" />
            Popular
          </span>
        )}

        {fooditem.tags.includes("veg") && (
          <span className="badge badge--veg">
            <Icon id="leaf-icon" />
            Veg
          </span>
        )}
      </div>

      <div className="menu-card_body">
        <div className="menu-card_heading">
          <h3>{fooditem.name}</h3>
          <span className="menu-card_price">{fooditem.price} SAR</span>
        </div>
        <p>{fooditem.description}</p>
      </div>

      <div className="menu-card_footer">
        {qty > 0 ? (
          <div className="stepper">
            <button type="button" onClick={() => decrementItem(fooditem.id)}>
              <Icon id={"minus-icon"} />
            </button>
            <span>{qty}</span>
            <button type="button" onClick={() => addToCart(fooditem.id)}>
              <Icon id={"plus-icon"} />
            </button>
          </div>
        ) : (
          <button
            className="btn btn--add"
            type="button"
            onClick={() => addToCart(fooditem.id)}
          >
            <Icon id="plus-icon" />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
