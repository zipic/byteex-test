import "./style.scss";

export const Reviews = () => {
  return (
    <div className="reviews">
      <h2>What are our fans saying?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien <br /> facilisis tincidunt pellentesque. In eget ipsum et felis
        finibus consequat. Fusce non <br /> nibh luctus.
      </p>
      <img className="reviews-girls" src="./images/girls.jpg" alt="girls" />
      <section className="cards">
        <img className="arrows" src="./icons/arrows-long.png" alt="arrows" />
        <div className="card">
          <div className="card-title">
            <div className="card-logo"></div>
            <div className="persone">
              <img src="./icons/rating.svg" alt="stars" />
              <p className="person-name">Jane, S.</p>
            </div>
          </div>
          <p className="card-article">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget
            aliquet mi.
          </p>
        </div>
        <div className="card second-card">
          <div className="card-title">
            <div className="card-logo"></div>
            <div className="person">
              <img src="./icons/rating.svg" alt="stars" />
              <p className="person-name">Jane, S.</p>
            </div>
          </div>
          <p className="card-article">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget
            aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales.
          </p>
        </div>
        <div className="card">
          <div className="card-title">
            <div className="card-logo"></div>
            <div className="person">
              <img src="./icons/rating.svg" alt="stars" />
              <p className="person-name">Jane, S.</p>
            </div>
          </div>
          <p className="card-article">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget
            aliquet mi.
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
export default Reviews;
