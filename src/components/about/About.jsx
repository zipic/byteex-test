import "./style.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="pictures">
        <img className="pictures-girl1" src="./images/girl1.png" alt="girl" />
        <img className="pictures-middle" src="./images/benefits-women.jpg" alt="girl" />
        <img className="pictures-girl2" src="./images/girl2.png" alt="" />
      </div>
      <div className="description">
  <h2 className="description-title">Be your best self.</h2>
  <p className="description-text">
    Hi! My name’s [Insert Name], and I founded [Insert] in ____.
  </p>
  <p className="description-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
    sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
  </p>
  <p className="description-text">
    Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat
    volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, 
    porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, 
    placerat ligula. Orci varius natoque penatibus et magnis dis parturient montes, 
    nascetur ridiculus mus.
  </p>
  <p className="description-text">
    Sed eu nisl a metus ultrices sodales. Fusce non ante velit. Sed auctor odio eu 
    semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique 
    tellus, ac convallis urna massa at nibh. Duis non fermentum augue. Vivamus laoreet 
    aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam 
    nec in sapien. Cras mattis varius mollis.
  </p>

  <button className="description-button">Customize Your Outfit</button>
</div>
    </div>
  );
};

export default About;
