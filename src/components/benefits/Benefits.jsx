import "./style.scss";

export const Benefits = () => {
  return (
    <div className="benefits">
      <p className="text">as seen in</p>
      <section className="benefits-partners">
        <img
          className="partner eco-stylist"
          src="./images/eco-stylist.png"
          alt="Eco Stylist"
        />
        <img
          className="partner canadian"
          src="./images/canadian.png"
          alt="Canadian"
        />
        <img
          className="partner jilian"
          src="./images/jilian.png"
          alt="Jilian"
        />
        <img className="partner hub" src="./images/hub.png" alt="Hub" />
        <img
          className="partner trendhunter"
          src="./images/trendhunter.png"
          alt="Trend Hunter"
        />
      </section>
      <div className="benefits-content">
        <section className="loungewear">
          <h2 className="loungewear-title">Loungewear you can be proud of.</h2>
          <div className="loungewear-container">
            <img src="./icons/cart.png" alt="cart" />
            <p>Ethically sourced.</p>
          </div>
          <p className="loungewear-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>
          <div className="loungewear-container">
            <img src="./icons/list.png" alt="list" />
            <p>Responsibly made.</p>
          </div>
          <p className="loungewear-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            <br />
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis
            <br /> finibus consequat.
          </p>
          <div className="loungewear-container">
            <img src="./icons/sun.png" alt="sun" />
            <p>Made for living in.</p>
          </div>
          <p className="loungewear-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            <br />
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis
            <br /> finibus consequat.
          </p>
          <div className="loungewear-container">
            <img src="./icons/wave.png" alt="wave" />
            <p>Unimaginably comfortable.</p>
          </div>
          <p className="loungewear-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            <br />
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis
            <br /> finibus consequat.
          </p>
        </section>
        <section className="pictures">
          <img
            className="women"
            src="./images/benefits-women.jpg"
            alt="women"
          />
          <div className="pictures__mini">
            <img src="./images/mini1.png" alt="mini" />
            <img src="./images/mini2.png" alt="active" />
            <img src="./images/mini1.png" alt="mini" />
            <img src="./images/mini1.png" alt="mini" />
            <img src="./images/mini1.png" alt="mini" />
            <img src="./images/mini1.png" alt="mini" />
            <img src="./images/mini1.png" alt="mini" />
            <img src="./images/mini1.png" alt="mini" />
          </div>
          <img className="women-arrow" src="./images/arrows.png" alt="arrows" />
          <p>White Robe</p>
        </section>
      </div>
    </div>
  );
};

export default Benefits;
