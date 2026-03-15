import gymImage from "../assets/gym.jpg";

function Hero({ openPopup }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${gymImage})`
      }}
    >
      <div className="hero-overlay">
        <h1>Build Your Dream Body</h1>
        <p>Train with the best trainers in town</p>

        <button className="cta" onClick={openPopup}>
          Start Today
        </button>

      </div>
    </section>
  );
}

export default Hero;