import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>HEADLESS CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            ratione ea, quibusdam aliquid laudantium corporis nostrum ad est
            fuga voluptate aperiam beatae error blanditiis delectus deserunt
            quaerat fugit voluptatibus vel!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
