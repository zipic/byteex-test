import Message from "../message/Message";
import "./style.scss";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <img className="logo" src="./icons/logo.png" alt="logo" />

        <div className="hero-wrapper">
          <section>
            <h2 className="hero-title">
              Don’t apologize for being
              <br /> comfortable.
            </h2>
            <div className="hero-description">
              <img src="./icons/sun.png" alt="sun" className="icon" />
              <p>Beautiful, comfortable loungewear for day or night.</p>
            </div>
            <div className="hero-description">
              <img src="./icons/cart.png" alt="cart" className="icon" />
              <p>No wasteful extras, like tags or plastic packaging.</p>
            </div>
            <div className="hero-description">
              <img src="./icons/wave.png" alt="wave" className="icon" />
              <p>
                Our signature fabric is incredibly comfortable — unlike
                <br /> anything you’ve ever felt.
              </p>
            </div>
            <button className="hero-button">
              Customize Your Outfit
              <span className="hero-button-icon">
                <img src="./icons/arrow.png" alt="arrow" />
              </span>
            </button>
          </section>
          <section className="girls">
            <div className="girls-rectangle-left"></div>
            <img
              src="./images/left-girl.png"
              alt="girl"
              className="girl-inline"
            />
            <img
              src="./images/middle-girl.png"
              alt="girl"
              className="girl-middle"
            />
            <img
              src="./images/right-girl.png"
              alt="girl"
              className="girl-inline"
            />
            <div className="girls-rectangle-right"></div>
          </section>
        </div>
      </div>
      <Message />
    </>
  );
};

export default Hero;
