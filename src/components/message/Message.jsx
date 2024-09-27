import "./style.scss";

export const Message = () => {
  return (
    <div className="wrapper">
      <div className="message">
        <div className="message-header">
          <img src="./icons/icon.png" alt="women" className="message-icon" />
          <p className="message-name">Amy P.</p>
          <img src="./icons/rating.svg" alt="rate" />
          <p className="message-title">One of 500+ 5 Star Reviews Online</p>
        </div>
        <article className="message-description">
          Overjoyed with my Loungewear set. I have the jogger and the
          <br /> sweatshirt. Quality product on every level. From the <br />
          compostable packaging, to the supplied washing bag, even the
          <br />
          garments smells like fresh herbs when I first held them.
        </article>
      </div>
    </div>
  );
};

export default Message;
