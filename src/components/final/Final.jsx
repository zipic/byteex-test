import "./style.scss";

export const Final = () => {
  return (
    <div className="final">
      <h2 className="final-title">Find something you love.</h2>
      <p className="final-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien <br /> facilisis tincidunt pellentesque. In eget ipsum et felis
        finibus consequat.
      </p>
      <img src="./icons/final.png" alt="women" />
      <button className="final-button">
        <img src="./icons/button.png" alt="button" />
      </button>
      <img src="./icons/details.png" alt="details" />
      <div className="last">
        <div className="coast">
          <img src="./icons/last-car.png" alt="car" />
          <p>FREE Shipping on <br /> Orders over $200</p>
        </div>
        <div className="coast coast-middle">
          <img src="./icons/last-shield.png" alt="shield" />
          <p>Over 500+ 5 Star <br /> Reviews Online</p>
        </div>
        <div className="coast">
          <img src="./icons/last-cart.png" alt="cart" />
          <p>Made ethically <br /> and responsibly.</p>
        </div>
      </div>
    </div>
  );
};

export default Final;
