import "./style.scss";

export const Faq = () => {
  return (
    <div className="faq">
      <section className="question">
        <h2 className="question-title">Frequently asked questions.</h2>
        <div className="question-box">
          <div>
            <div className="faq-question">
              <p className="faq-question-title">lorem ipsum dolor sit amet</p>
              <img src="./icons/minus.svg" alt="minus" />
            </div>
            <p className="faq-question-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
          </div>
          <div className="faq-question">
            <p className="faq-question-title">lorem ipsum dolor sit amet</p>
            <img src="./icons/plus.svg" alt="plus" />
          </div>
          <div className="faq-question">
            <p className="faq-question-title">lorem ipsum dolor sit amet</p>
            <img src="./icons/plus.svg" alt="plus" />
          </div>
          <div className="faq-question">
            <p className="faq-question-title">lorem ipsum dolor sit amet</p>
            <img src="./icons/plus.svg" alt="plus" />
          </div>
          <div className="faq-question">
            <p className="faq-question-title">lorem ipsum dolor sit amet</p>
            <img src="./icons/plus.svg" alt="plus" />
          </div>
          <div className="faq-question">
            <p className="faq-question-title">lorem ipsum dolor sit amet</p>
            <img src="./icons/plus.svg" alt="plus" />
          </div>
        </div>
      </section>
      <section className="women">
        <img className="women-picture" src="./images/component.png" alt="women" />
      </section>
    </div>
  );
};

export default Faq;
