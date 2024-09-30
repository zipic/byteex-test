import "./style.scss";

export const Order = () => {
  return (
    <div className="order">
      <p className="order-title">Comfort made easy</p>
      <section className="order-box">
        <div className="one">
          <img className="one-cart" src="/icons/cart-clear.png" alt="cart" />
          <p className="one-title">You save.</p>
          <p className="one-article">
            Browse our comfort sets and save 15% when you bundle.
          </p>
        </div>
        <div className="two">
          <img className="two-car" src="./icons/car-clear.png" alt="car" />
          <p className="two-title">We ship.</p>
          <p className="one-article">
            We ship your items within 1-2 days of receiving your order.
          </p>
        </div>
        <div className="one">
          <img className="one-sun" src="./icons/sun-clear.png" alt="sun" />
          <p className="one-title">You enjoy!</p>
          <p className="one-article">
            Wear hernest around the house, out on the town, or in bed.
          </p>
        </div>
      </section>
      <button className="order-button">
        Customize Your Outfit
        <span className="order-button-icon">
          <img src="./icons/arrow.png" alt="arrow" />
        </span>
      </button>
      <div className="order-rate">
        <img src="./icons/rating.svg" alt="rate" />
        <p>Over 500+ 5 Star Reviews Online</p>
      </div>
    </div>
  );
};

export default Order;
