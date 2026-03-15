import CountUp from "react-countup";

function Stats() {
  return (
    <section className="stats">

      <div className="stat">
        <h2>
          <CountUp end={1200} duration={3} />+
        </h2>
        <p>Members</p>
      </div>

      <div className="stat">
        <h2>
          <CountUp end={15} duration={3} />
        </h2>
        <p>Trainers</p>
      </div>

      <div className="stat">
        <h2>
          <CountUp end={8} duration={3} />
        </h2>
        <p>Years Experience</p>
      </div>

      <div className="stat">
        <h2>
          <CountUp end={500} duration={3} />+
        </h2>
        <p>Transformations</p>
      </div>

    </section>
  );
}

export default Stats;